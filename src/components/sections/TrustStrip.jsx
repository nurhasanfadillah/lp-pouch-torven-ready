import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { TRUST_ITEMS } from "@/data/landingContent"

const CLIENT_LOGOS = [
  "/images/logo-klien/gojek.PNG",
  "/images/logo-klien/shopee.PNG",
  "/images/logo-klien/bca.PNG",
  "/images/logo-klien/telkomsel.PNG",
  "/images/logo-klien/samsung.PNG",
  "/images/logo-klien/pertamina.PNG",
  "/images/logo-klien/pln.PNG",
  "/images/logo-klien/ikea.PNG",
  "/images/logo-klien/shell.PNG",
]

export default function TrustStrip() {
  return (
    <section className="bg-torven-cream py-6 overflow-hidden">
      <Container>
        <p className="text-center text-xs text-torven-text/50 mb-4 font-medium uppercase tracking-wider">
          Telah dipercaya oleh brand besar
        </p>
        <div className="relative">
          {/* Gradient fade edges for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-torven-cream to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-torven-cream to-transparent z-10 pointer-events-none md:hidden" />

          <div className="flex gap-8 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible items-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.img
                key={logo}
                src={logo}
                alt={`Client logo ${i + 1}`}
                loading="lazy"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-12 w-auto object-contain flex-shrink-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 mt-6 md:flex-wrap md:justify-center md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-torven-border rounded-full text-sm hover:border-torven-navy/50 transition-colors">
                <span className="font-semibold text-torven-navy">{item.label}</span>
                <span className="text-torven-text/60 text-xs">{item.proof}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}