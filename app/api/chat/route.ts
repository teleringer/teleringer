import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a helpful assistant for Teleringer, a small business communications company.
You ONLY answer questions about Teleringer, its services, pricing, and how to get started.
If a question is unrelated to Teleringer or its services, politely decline and redirect to what you can help with.

ABOUT TELERINGER:
- UCaaS & CCaaS provider for small/medium businesses
- Phone: (570) 456-5550 | Email: info@teleringer.com
- Backed by 70+ years of telecom expertise via Endeavor Communications / GigTel

SERVICES:
1. Voice Solutions — HD voice, call forwarding, voicemail-to-email, auto-attendant, call analytics, mobile integration
2. Video Collaboration — conferencing, screen sharing, recording, cross-platform
3. Contact Centers — intelligent routing, real-time analytics, omnichannel support
4. Missed Calls — missed-call text-back automation; Standard $59/mo, Pro $79/mo, Premium $99/mo + $100 one-time setup fee
5. eFax — bank-level encryption, multi-device, cloud storage, email integration
6. AI Voice Agents — custom AI receptionist, automated sales/orders/refunds, 24/7 service
7. SIP Trunking — internet-based call routing, free long-distance, cost savings
8. Complete UCaaS Package — all-in-one bundle (contact for pricing)

KEY BENEFITS: Up to 60% cost reduction vs traditional phone systems, quick setup (minutes not weeks), 24/7 support, mobile-ready, enterprise security, scalable pricing

MISSED CALLS DETAIL: Instantly texts back missed callers, captures lead info automatically. No contracts, cancel anytime with 30 days notice.

To get started: call (570) 456-5550, email info@teleringer.com, or visit the Contact page on the website.`;

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") || "0");
  if (contentLength > 50 * 1024) {
    return Response.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: {
    messages: { role: string; content: string }[];
    lead: { name: string; email: string; phone?: string };
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { messages, lead } = body;

  if (!lead?.name || !lead?.email) {
    return Response.json({ error: "Missing lead info" }, { status: 400 });
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Missing messages" }, { status: 400 });
  }

  const firstName = lead.name.trim().split(/\s+/)[0];
  const capped = messages.slice(-10);

  // Strip any leading assistant messages (client pre-seeds a welcome message for display)
  const firstUserIdx = capped.findIndex((m) => m.role === "user");
  const cleanMessages = firstUserIdx >= 0 ? capped.slice(firstUserIdx) : capped;

  const leadContext =
    `You are speaking with ${lead.name} (${lead.email}` +
    (lead.phone ? `, ${lead.phone}` : "") +
    `). Address them by first name (${firstName}).`;

  const allMessages: Anthropic.MessageParam[] = [
    { role: "user", content: leadContext },
    {
      role: "assistant",
      content: `Understood! I'll address ${firstName} by their first name throughout our conversation.`,
    },
    ...cleanMessages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        // cache_control on the frozen system prompt enables prompt caching
        const anthropicStream = (client.messages as any).stream({
          model: "claude-haiku-4-5",
          max_tokens: 1024,
          system: [
            {
              type: "text",
              text: SYSTEM_PROMPT,
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: allMessages,
        });

        for await (const event of anthropicStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta?.type === "text_delta"
          ) {
            const data = `data: ${JSON.stringify({ token: event.delta.text })}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (err) {
        console.error("chat stream error:", err);
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: "Stream error" })}\n\n`),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
