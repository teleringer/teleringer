import { permanentRedirect } from "next/navigation";

export default function RevenueRecoveryRedirect() {
  permanentRedirect("/missed-calls");
}
