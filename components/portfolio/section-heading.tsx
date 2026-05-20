import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <Badge variant="muted" className="mb-4">
        {eyebrow}
      </Badge>
      <h2 className="mb-5 bg-gradient-to-r from-cyan-100 via-white to-fuchsia-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
        {title}
      </h2>
      <p className="text-sm text-zinc-300 sm:text-base">{description}</p>
    </div>
  );
}
