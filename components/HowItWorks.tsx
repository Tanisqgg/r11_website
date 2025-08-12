import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Ingest",
      desc: "Upload via API or connect crawlers to monitor the open web & major platforms."
    },
    {
      title: "Detect",
      desc: "Run deepfake/forgery models and fingerprint matches; rank by risk."
    },
    {
      title: "Assemble evidence",
      desc: "Capture pages, headers, hashes, and screenshots into an evidence pack."
    },
    {
      title: "Enforce",
      desc: "File DMCA/ToS reports programmatically, track status, and auto follow-up."
    }
  ];

  return (
    <section id="how" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-4 text-white/80">Proactive detection + automated enforcement, end to end.</p>
        </div>
        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="card flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand">{i + 1}</div>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1 text-white/70">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-white/60">
          * We never expose API keys in the browser. Server routes handle secrets securely.
        </p>
      </div>
    </section>
  );
}
