import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { PRODUCT_INFO } from "@/data/landingContent"
import { Ruler, Layers, Droplets, Grid3X3 } from "lucide-react"

const SPECS = [
  {
    icon: Ruler,
    label: "Ukuran",
    value: PRODUCT_INFO.size,
    color: "text-torven-navy",
    bg: "bg-torven-navy/10",
  },
  {
    icon: Layers,
    label: "Bahan",
    value: PRODUCT_INFO.material,
    color: "text-torven-navy",
    bg: "bg-torven-navy/10",
  },
  {
    icon: Droplets,
    label: "Sifat",
    value: PRODUCT_INFO.properties,
    color: "text-blue-600",
    bg: "bg-blue-50",
    small: true,
  },
  {
    icon: Grid3X3,
    label: "Kompartemen",
    value: PRODUCT_INFO.compartments,
    color: "text-purple-600",
    bg: "bg-purple-50",
    small: true,
  },
]

export default function ProductDetails() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-torven-cream" id="produk">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Detail pouch yang praktis untuk branding harian
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] overflow-hidden"
          >
            <img
              src="/images/pouch_tekstur_dan_detail_ritsleting.png"
              alt="Custom Pouch DTF - Detail tekstur dan ritsleting"
              className="w-full h-auto rounded-[32px] shadow-lg"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-torven-amber text-torven-navy text-xs font-bold px-3 py-1 rounded-full">
              DTF Print Area
            </div>
            <div className="absolute top-4 left-4 bg-torven-navy text-white text-xs font-bold px-3 py-1 rounded-full">
              Water Repellent
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Main specs grid */}
            <div className="grid grid-cols-2 gap-4">
              {SPECS.slice(0, 2).map((spec, i) => {
                const Icon = spec.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-5 rounded-[20px] ${spec.bg} border border-white/60`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${spec.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${spec.color}`} />
                    </div>
                    <p className="text-xs font-medium text-torven-text/50 uppercase tracking-wide mb-1">
                      {spec.label}
                    </p>
                    <p className={`font-display font-bold ${spec.color} leading-tight`}>
                      {spec.value}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Secondary specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SPECS.slice(2).map((spec, i) => {
                const Icon = spec.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 2) * 0.1 }}
                    className={`p-4 rounded-[16px] ${spec.bg} border border-white/60`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg ${spec.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-4 h-4 ${spec.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-torven-text/50 uppercase tracking-wide mb-0.5">
                          {spec.label}
                        </p>
                        <p className="text-sm font-semibold text-torven-text/80 leading-snug">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Colors badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-white/70 rounded-2xl p-4 border border-torven-border"
            >
              <div className="flex gap-1.5">
                {["bg-black", "bg-gray-400", "bg-blue-600", "bg-red-700", "bg-amber-500"].map((c, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-full ${c} border border-white/40 shadow-sm`}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-torven-text/70">
                {PRODUCT_INFO.colors}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}