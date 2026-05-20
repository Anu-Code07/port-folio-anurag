import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-zinc-100 shadow-[0_0_35px_rgba(34,211,238,0.08)] outline-none transition-colors placeholder:text-zinc-400 focus-visible:border-cyan-200/80 focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
