import { cn } from "@/lib/utils"

export function SectionLabel({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-torven-border bg-white/50 px-3 py-1 text-xs font-medium text-torven-text/70",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
