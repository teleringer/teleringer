export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string };
}) {
  const sent = searchParams?.sent === "1";

  return (
    <main style={{ maxWidth: 840, margin: "40px auto", padding: "0 16px", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Contact Teleringer</h1>
      <p>Tell us a bit about your needs and we’ll follow up shortly.</p>

      {sent && (
        <div
          role="status"
          style={{
            marginTop: 16,
            marginBottom: 8,
            padding: "10px 12px",
            background: "#e7f7ea",
            border: "1px solid #b9e5c0",
            borderRadius: 6,
            color: "#0c5c26",
          }}
        >
          Thanks — your message was sent.
        </div>
      )}

      {/* Plain HTML form: posts directly to our API route */}
      <form action="/api/contact" method="post" style={{ marginTop: 24, display: "grid", gap: 12 }}>
        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Your name</span>
          <input name="name" required style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Your email</span>
          <input name="email" type="email" required style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Company (optional)</span>
          <input name="company" style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Phone (optional)</span>
          <input name="phone" style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Subject</span>
          <input name="subject" required style={{ width: "100%", padding: 8 }} />
        </label>

        <fieldset style={{ border: "1px solid #ddd", padding: 12 }}>
          <legend style={{ padding: "0 6px" }}>Services (optional)</legend>

          <label style={{ display: "block", marginBottom: 6 }}>
            <input type="checkbox" name="service" value="VoIP / Phone System" /> VoIP / Phone System
          </label>

          <label style={{ display: "block", marginBottom: 6 }}>
            <input type="checkbox" name="service" value="Website" /> Website
          </label>

          <label style={{ display: "block" }}>
            <input type="checkbox" name="service" value="AI Concierge / Call Agent" /> AI Concierge / Call Agent
          </label>
        </fieldset>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>How can we help?</span>
          <textarea name="message" rows={6} required style={{ width: "100%", padding: 8 }} />
        </label>

        {/* Honeypot anti-bot field (hidden) */}
        <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <button type="submit" style={{ padding: "10px 14px", width: 180, justifySelf: "center" }}>
          Send Message
        </button>
      </form>
    </main>
  );
}
