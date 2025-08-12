import { CardFeature } from "./ui";
import { Eye, Fingerprint, Search, Shield, FileCheck2, BadgeCheck } from "lucide-react";

export function Features() {
  const items = [
    {
      icon: Eye,
      title: "Deepfake & forgery detection",
      desc: "Multimodal classifiers for face/voice consistency, artifacts, and low-level cues."
    },
    {
      icon: Search,
      title: "Reverse image/video search",
      desc: "Perceptual hashing + crawling pipelines to maximize recall across the open web."
    },
    {
      icon: Fingerprint,
      title: "Fingerprinting",
      desc: "Watermark & hash matches even after crops, resizes, and minor edits."
    },
    {
      icon: FileCheck2,
      title: "Evidence packs",
      desc: "Timestamped captures with URLs, headers, and screenshots for legal follow-through."
    },
    {
      icon: Shield,
      title: "Policy-aware actions",
      desc: "Map violations to platform policies to cut false positives and speed removals."
    },
    {
      icon: BadgeCheck,
      title: "Developer-friendly",
      desc: "Simple REST APIs, webhooks, and a dashboard with role-based access."
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Built for scale and accuracy</h2>
          <p className="mt-4 text-white/80">
            From pre-upload screening to automated enforcement—plug in the pieces you need.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <CardFeature key={title} title={title} desc={desc} icon={<Icon className="h-5 w-5 text-brand" />} />
          ))}
        </div>
      </div>
    </section>
  );
}
