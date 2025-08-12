import { Beaker, CheckCircle2, Rocket } from "lucide-react";

export function ComingSoon() {
  const items = [
    { icon: Beaker, title: "MVP live today", desc: "Reverse image/video search, baseline deepfake detection, and automated evidence packs." },
    { icon: CheckCircle2, title: "Hardening in progress", desc: "Model ensemble tuning, evals, and monitoring to reduce false positives/negatives." },
    { icon: Rocket, title: "Production rollout", desc: "Enterprise SSO, SLAs, audit logs, and high-throughput pipelines." },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge mb-4">Roadmap</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Production-ready model — coming soon</h2>
          <p className="mt-4 text-white/80">
            We’re shipping fast: MVP is available for demos and pilots now. Our production model is in final validation with expanded scale and reliability.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <Icon className="h-5 w-5 text-brand" />
              <p className="mt-3 font-semibold">{title}</p>
              <p className="mt-1 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}