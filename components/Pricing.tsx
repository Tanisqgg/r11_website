export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      features: [
        "1 project • 100 scans/mo",
        "Email support",
        "Dashboard access"
      ],
      cta: "Start free",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$299",
      period: "/mo",
      features: [
        "Up to 100k scans/mo",
        "Webhooks + evidence packs",
        "Priority support"
      ],
      cta: "Get Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Millions of scans",
        "Dedicated SRE, SLA",
        "On-prem / VPC options"
      ],
      cta: "Contact sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Simple pricing that scales</h2>
          <p className="mt-4 text-white/80">Pick a tier or talk to us for custom needs.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`card ${t.highlighted ? "border-brand/40" : ""}`}>
              <p className="text-sm text-white/70">{t.name}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-bold md:text-4xl">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#contact" className={`mt-6 inline-block rounded-xl px-4 py-2 ${t.highlighted ? "bg-brand text-white" : "bg-white/10 text-white hover:bg-white/20"}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
