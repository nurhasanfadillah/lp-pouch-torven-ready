import { WHATSAPP_LINK } from "@/data/landingContent"
import { Phone } from "lucide-react"

export default function StickyWhatsAppBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-torven-navy md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-14 text-white font-semibold text-sm transition-all duration-200 hover:bg-torven-navyLight active:scale-[0.98]"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        Chat WhatsApp Sekarang
      </a>
    </div>
  )
}