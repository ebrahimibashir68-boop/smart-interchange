import { useState } from "react";

type PiAuthResult = {
  accessToken: string;
  user: { uid: string; username: string };
};

type PiPaymentDTO = {
  identifier: string;
  amount: number;
  memo: string;
  status: { developer_approved: boolean; transaction_verified: boolean; developer_completed: boolean; cancelled: boolean; user_cancelled: boolean };
  transaction?: { txid: string; verified: boolean; _link: string } | null;
};

type PiSDK = {
  init: (cfg: { version: string; sandbox?: boolean }) => void;
  authenticate: (
    scopes: string[],
    onIncompletePaymentFound: (p: PiPaymentDTO) => void
  ) => Promise<PiAuthResult>;
  createPayment: (
    paymentData: { amount: number; memo: string; metadata: Record<string, unknown> },
    callbacks: {
      onReadyForServerApproval: (paymentId: string) => void;
      onReadyForServerCompletion: (paymentId: string, txid: string) => void;
      onCancel: (paymentId: string) => void;
      onError: (error: Error, payment?: PiPaymentDTO) => void;
    }
  ) => void;
};

declare global {
  interface Window {
    Pi?: PiSDK;
  }
}

type Tier = { id: string; name: string; amount: number; description: string; highlight?: boolean };

const TIERS: Tier[] = [
  {
    id: "single",
    name: "Single contract",
    amount: 1,
    description: "Deploy one AI-validated import/export contract on-chain.",
  },
  {
    id: "trader",
    name: "Trader pass",
    amount: 5,
    description: "Five contracts + priority customs routing & escrow.",
    highlight: true,
  },
  {
    id: "fleet",
    name: "Fleet license",
    amount: 25,
    description: "Unlimited contracts for 30 days. Multi-party signing.",
  },
];

type Status = { kind: "idle" } | { kind: "pending"; msg: string } | { kind: "ok"; msg: string } | { kind: "err"; msg: string };

export function PiPayment() {
  const [user, setUser] = useState<PiAuthResult["user"] | null>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [activeTier, setActiveTier] = useState<string | null>(null);

  const ensureSdk = (): PiSDK | null => {
    if (typeof window === "undefined" || !window.Pi) {
      setStatus({
        kind: "err",
        msg: "Pi SDK unavailable. Open this app inside the Pi Browser to pay.",
      });
      return null;
    }
    return window.Pi;
  };

  const handleIncomplete = (payment: PiPaymentDTO) => {
    console.log("Pi: incomplete payment found", payment);
  };

  const authenticate = async () => {
    const Pi = ensureSdk();
    if (!Pi) return null;
    setStatus({ kind: "pending", msg: "Authenticating with Pi…" });
    try {
      const result = await Pi.authenticate(["username", "payments"], handleIncomplete);
      setUser(result.user);
      setStatus({ kind: "ok", msg: `Signed in as @${result.user.username}` });
      return result;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Authentication failed";
      setStatus({ kind: "err", msg });
      return null;
    }
  };

  const pay = async (tier: Tier) => {
    const Pi = ensureSdk();
    if (!Pi) return;
    if (!user) {
      const res = await authenticate();
      if (!res) return;
    }
    setActiveTier(tier.id);
    setStatus({ kind: "pending", msg: `Opening Pi payment for ${tier.amount} π…` });

    Pi.createPayment(
      {
        amount: tier.amount,
        memo: `X-PORT · ${tier.name}`,
        metadata: { tier: tier.id, product: "x-port-smart-contract" },
      },
      {
        onReadyForServerApproval: (paymentId) => {
          console.log("Pi: ready for server approval", paymentId);
          setStatus({ kind: "pending", msg: "Awaiting approval…" });
        },
        onReadyForServerCompletion: (paymentId, txid) => {
          console.log("Pi: ready for server completion", paymentId, txid);
          setStatus({
            kind: "ok",
            msg: `Payment of ${tier.amount} π confirmed · txid ${txid.slice(0, 10)}…`,
          });
          setActiveTier(null);
        },
        onCancel: (paymentId) => {
          console.log("Pi: cancelled", paymentId);
          setStatus({ kind: "err", msg: "Payment cancelled." });
          setActiveTier(null);
        },
        onError: (error) => {
          console.error("Pi: payment error", error);
          setStatus({ kind: "err", msg: error.message || "Payment failed." });
          setActiveTier(null);
        },
      }
    );
  };

  return (
    <section id="pi" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            // pi network payments
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Pay with <span className="text-primary text-glow">Pi</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Activate smart contracts using the Pi cryptocurrency. Open in Pi Browser
            to authenticate and settle on the Pi blockchain.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`group relative flex flex-col rounded-3xl border bg-surface p-6 transition ${
                tier.highlight
                  ? "border-primary/50 shadow-glow"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-2.5 left-6 rounded-full bg-primary px-3 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary-foreground">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-xl font-bold tracking-tight">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-primary">{tier.amount}</span>
                <span className="font-mono text-sm text-muted-foreground">π</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{tier.description}</p>
              <button
                onClick={() => pay(tier)}
                disabled={activeTier === tier.id}
                className={`mt-6 rounded-full px-5 py-3 text-sm font-semibold transition disabled:opacity-60 ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background hover:bg-surface-2"
                }`}
              >
                {activeTier === tier.id ? "Processing…" : `Pay ${tier.amount} π`}
              </button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 text-center">
          {user ? (
            <p className="font-mono text-[11px] uppercase tracking-widest text-success">
              · authenticated as @{user.username}
            </p>
          ) : (
            <button
              onClick={authenticate}
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
            >
              · connect Pi account
            </button>
          )}
          {status.kind !== "idle" && (
            <p
              className={`font-mono text-[11px] uppercase tracking-widest ${
                status.kind === "ok"
                  ? "text-success"
                  : status.kind === "err"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {status.msg}
            </p>
          )}
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Sandbox mode · testnet π
          </p>
        </div>
      </div>
    </section>
  );
}
