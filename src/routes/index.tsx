import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import networkImg from "@/assets/network.jpg";
import { PiPayment } from "@/components/PiPayment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X-PORT — AI Smart Contracts for Global Trade" },
      {
        name: "description",
        content:
          "Deploy AI-validated, blockchain-secured import & export contracts. Decentralized. No intermediaries. Frictionless cross-border logistics.",
      },
      { property: "og:title", content: "X-PORT — Autonomous Global Trade" },
      {
        property: "og:description",
        content:
          "AI-drafted smart contracts on blockchain for import/export. Escrow, customs, and multi-party signing — fully automated.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Dashboard />
        <Features />
        <Network />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="grid size-7 place-items-center rounded-full bg-primary">
            <div className="size-2 rounded-full bg-background" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">X-PORT</span>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#how" className="text-sm text-muted-foreground transition hover:text-foreground">How it works</a>
          <a href="#features" className="text-sm text-muted-foreground transition hover:text-foreground">Features</a>
          <a href="#dashboard" className="text-sm text-muted-foreground transition hover:text-foreground">Dashboard</a>
        </div>
        <a
          href="#cta"
          className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-primary transition hover:bg-primary/20"
        >
          0x8f2…E4c1
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-success" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Mainnet · Live
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Automate your{" "}
            <span className="text-primary text-glow">global trade</span>.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Deploy AI-validated smart contracts for frictionless cross-border import and
            export. No banks. No brokers. No middlemen — just code, signed and sealed
            on-chain.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Deploy a contract
            </a>
            <a
              href="#how"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-2"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Ethereum</span>
            <span className="size-1 rounded-full bg-border" />
            <span>Polygon</span>
            <span className="size-1 rounded-full bg-border" />
            <span>Base</span>
            <span className="size-1 rounded-full bg-border" />
            <span>Arbitrum</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
            <img
              src={heroImg}
              alt="Cryptographically sealed shipping container glowing with a teal blockchain insignia"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Contract Sealed
                  </p>
                  <p className="mt-1 font-display text-base font-semibold">
                    SH-9921 · $2,480,000
                  </p>
                </div>
                <div className="rounded-md border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-success">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "$4.2B", l: "Settled on-chain" },
    { v: "180+", l: "Ports integrated" },
    { v: "47 sec", l: "Avg. clearance" },
    { v: "0.0%", l: "Broker fees" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {items.map((s) => (
          <div key={s.l} className="border-b border-border p-6 md:border-b-0 lg:p-10">
            <p className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {s.v}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Describe in plain language",
      d: "Tell the AI what you're shipping, to whom, and under what terms. It drafts an ironclad smart contract that respects local tax law and Incoterms.",
    },
    {
      n: "02",
      t: "Multi-party signing & escrow",
      d: "Buyer, seller, carrier, and customs sign cryptographically. Funds lock in a decentralized escrow secured by threshold signatures.",
    },
    {
      n: "03",
      t: "Autonomous release",
      d: "IoT sensors, GPS proofs, and customs APIs trigger automatic payouts. Zero human intervention. Zero disputes.",
    },
  ];
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            From manifest to ledger
            <br />
            <span className="text-muted-foreground">in three steps.</span>
          </h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
            // workflow
          </span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-surface p-8 lg:p-10">
              <span className="font-mono text-xs font-bold text-primary">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section id="dashboard" className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // live operations
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Your trade desk,
              <br />
              <span className="text-primary">on-chain</span>.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Track every shipment, contract, and counterparty in real time. The AI agent
              flags compliance risks before they cost you a port-of-entry hold.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-5 shadow-glow lg:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display font-bold">Active Shipments</h3>
              <span className="font-mono text-xs text-primary">12 active</span>
            </div>

            <div className="space-y-3">
              <ShipmentCard
                id="CN-DE-9921"
                title="Electronic Components · 4 containers"
                status="In Transit"
                progress={75}
                eta="Oct 24"
              />
              <ShipmentCard
                id="BR-NL-4421"
                title="Specialty Coffee · 18 tonnes"
                status="Customs"
                progress={42}
                eta="Nov 02"
                tone="warn"
              />
              <div className="rounded-2xl border border-dashed border-secondary/40 bg-surface/50 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-xl bg-secondary/20">
                    <div className="size-2 animate-pulse rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">AI Compliance Review</h4>
                    <p className="text-xs text-muted-foreground">
                      Validating EUR-1 origin docs for #BR-NL-4421…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipmentCard({
  id,
  title,
  status,
  progress,
  eta,
  tone = "ok",
}: {
  id: string;
  title: string;
  status: string;
  progress: number;
  eta: string;
  tone?: "ok" | "warn";
}) {
  const toneClass =
    tone === "warn"
      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
      : "border-success/30 bg-success/10 text-success";
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ID · {id}
          </p>
          <h4 className="mt-1 font-semibold">{title}</h4>
        </div>
        <div className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${toneClass}`}>
          {status}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{progress}%</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <div className="flex -space-x-2">
          <span className="grid size-6 place-items-center rounded-full border-2 border-surface bg-stone-800 text-[8px] font-bold">AI</span>
          <span className="grid size-6 place-items-center rounded-full border-2 border-surface bg-secondary/30 text-[8px] font-bold text-secondary-foreground">BC</span>
          <span className="grid size-6 place-items-center rounded-full border-2 border-surface bg-primary/30 text-[8px] font-bold text-primary">CS</span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          ETA · {eta}
        </p>
      </div>
    </div>
  );
}

function Features() {
  const feats = [
    {
      t: "AI contract drafting",
      d: "Natural-language to Solidity. The model embeds Incoterms 2020, sanctions lists, and HS codes automatically.",
    },
    {
      t: "Decentralized escrow",
      d: "Multi-sig vaults release funds only when on-chain proof of delivery is verified by oracles.",
    },
    {
      t: "Customs automation",
      d: "Direct API hooks into 180+ port systems for instant clearance and digital bills of lading.",
    },
    {
      t: "Multi-party signing",
      d: "Threshold signatures eliminate single points of failure across buyer, seller, carrier, and inspector.",
    },
    {
      t: "Zero-knowledge proofs",
      d: "Verify shipment specifics without revealing trade secrets or commercial pricing.",
    },
    {
      t: "Neural audits",
      d: "Continuous AI review catches logic errors and exploit patterns before deployment.",
    },
  ];
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            // infrastructure
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Built for institutional trade.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f, i) => (
            <div key={f.t} className="group bg-surface p-7 transition hover:bg-surface-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="grid size-9 place-items-center rounded-lg border border-border bg-background">
                  <div className="size-3 rounded-sm border-2 border-primary transition group-hover:rotate-45" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // network
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Live global trade flow.
            </h2>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-success md:flex">
            <span className="size-1.5 animate-pulse rounded-full bg-success" />
            Streaming
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-background">
          <img
            src={networkImg}
            alt="Global map showing live trade nodes connected by glowing data lines"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/2 -z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:px-8 lg:py-32">
        <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
          Initiate <span className="text-primary text-glow">autonomous trade</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Connect a wallet, describe your shipment, and deploy your first AI-validated
          contract in under three minutes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
            Connect wallet
          </button>
          <button className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition hover:bg-surface-2">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <div className="grid size-6 place-items-center rounded-full bg-primary">
            <div className="size-1.5 rounded-full bg-background" />
          </div>
          <span className="font-display font-bold tracking-tight">X-PORT</span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          X-PORT Protocol © 2026 · v4.02 mainnet
        </p>
      </div>
    </footer>
  );
}
