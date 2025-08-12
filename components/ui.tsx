import { ReactNode } from "react";

export function CardFeature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card">
      <div className="mb-3">{icon}</div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-white/70">{desc}</p>
    </div>
  );
}
