import Link from "next/link";

export function CTA() {
  return (
    <section className="section">
      <div className="container text-center">
        <div className="card">
          <h3 className="text-2xl font-semibold md:text-3xl">Ready to protect your users and brand?</h3>
          <p className="mt-2 text-white/80">See redelevenlabs in action with a tailored demo.</p>
          <Link href="#contact" className="mt-4 inline-flex rounded-xl bg-brand px-6 py-3 font-medium">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
