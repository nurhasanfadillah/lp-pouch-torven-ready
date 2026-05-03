import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK } from "@/data/landingContent"

export default function FinalCta() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-torven-navy">
      <Container className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Punya logo? Kirim sekarang, dapatkan mockup pouch gratis
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Cocok untuk merchandise bisnis, souvenir event, komunitas, dan kebutuhan branding tanpa minimum order.
          </p>
          <Button
            size="lg"
            className="bg-torven-amber text-torven-navy hover:bg-torven-amber/90"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Chat WhatsApp TORVEN
            </a>
          </Button>
          <p className="text-sm text-white/60 mt-4">
            Respons untuk konsultasi desain, harga, dan estimasi produksi.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}