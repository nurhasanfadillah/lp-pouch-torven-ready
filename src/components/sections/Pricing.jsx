import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { PRICING, WHATSAPP_LINK } from "@/data/landingContent"

export default function Pricing() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-torven-navy text-white" id="harga">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Harga jelas untuk order kecil maupun bulk
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {PRICING.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white/10 backdrop-blur rounded-[32px] p-4 sm:p-6 md:p-8 border border-white/20"
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-torven-amber text-torven-navy">
                  {plan.badge}
                </Badge>
              )}
              <div className="text-sm text-white/60 mb-2">{plan.label}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-display font-bold text-torven-amber">
                  {plan.price}
                </span>
                <span className="text-sm text-white/60">{plan.unit}</span>
              </div>
              <p className="text-sm text-white/70 mb-6">{plan.bestFor}</p>
              <Button
                className="w-full bg-torven-amber text-torven-navy hover:bg-torven-amber/90"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-white/50 mt-8">
          Harga dapat menyesuaikan kebutuhan desain, jumlah, dan detail produksi. Chat WhatsApp untuk konsultasi cepat.
        </p>
      </Container>
    </section>
  )
}