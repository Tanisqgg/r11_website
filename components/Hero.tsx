import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section">
      <div className="container relative">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:32px_32px] opacity-20" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge mb-6">
            <ShieldCheck className="h-4 w-4" />
            Proactive Trust & Safety
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Find <span className="text-brand">deepfakes</span> before they spread.
            Automate takedowns at scale.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            RedElevenLabs scans the web for impersonations and synthetic media—then
            builds evidence packs and files removals automatically.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Book a demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#how" className="btn-secondary">
              See how it works
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card">
              <p className="font-semibold">Pre-upload screening</p>
              <p className="mt-1 text-sm text-white/70">APIs to stop risky content before it goes live.</p>
            </div>
            <div className="card">
              <p className="font-semibold">Continuous monitoring</p>
              <p className="mt-1 text-sm text-white/70">Search the web & platforms for impersonations.</p>
            </div>
            <div className="card">
              <p className="font-semibold">Automated takedowns</p>
              <p className="mt-1 text-sm text-white/70">Evidence packs, DMCA/ToS filings, and tracking.</p>
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-white/70">
            <Zap className="h-4 w-4" />
            <span>Privacy-first • No client secrets in the browser</span>
          </div>
        </div>
      </div>
    </section>
  );
}
