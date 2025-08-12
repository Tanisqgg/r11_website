export function FAQ() {
  const qas = [
    {
      q: "Is this production-ready?",
      a: "We’re live with an MVP for demos and pilots now. The production model (with SLAs and enterprise features) is in final validation."
    },
    {
      q: "How do you treat false positives?",
      a: "Policy-aware scoring, human-in-the-loop review options, and transparent evidence packs."
    },
    {
      q: "Do you store user data?",
      a: "We minimize retention and support privacy-first deployments, including VPC and on‑prem."
    },
    {
      q: "Can I integrate with my moderation team?",
      a: "Yes—webhooks, exports, and a dashboard to track reports and outcomes."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">FAQs</h2>
          <p className="mt-4 text-white/80">Straight answers to common questions.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {qas.map((item) => (
            <details key={item.q} className="card">
              <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
              <p className="mt-2 text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
