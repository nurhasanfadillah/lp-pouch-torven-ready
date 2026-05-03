import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-torven-amber focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-torven-amber text-torven-navy",
        secondary: "border-transparent bg-torven-navy text-white",
        outline: "border-torven-border text-torven-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
