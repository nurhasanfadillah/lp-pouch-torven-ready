import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK } from "@/data/landingContent"

const PROBLEMS = [
  "MOQ terlalu tinggi untuk testing desain.",
  "Deadline event mepet.",
  "Takut hasil cetak tidak sesuai ekspektasi.",
  "Harga custom sering tidak transparan.",
  "Butuh vendor yang sanggupi order kecil dan besar.",
]

export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <Container className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-6">
            Vendor merchandise sering ribet. TORVEN dibuat lebih fleksibel.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {PROBLEMS.map((problem, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 bg-torven-cream rounded-[24px]"
            >
              <span className="text-torven-navy font-bold">✕</span>
              <span className="text-sm text-torven-text/80">{problem}</span>
            </div>
          ))}
          <p className="text-sm text-torven-text/80 mt-4 pl-3">
            Dengan mockup gratis, tanpa minimum order, dan kapasitas produksi 30.000 pcs/bulan, TORVEN bisa dipakai untuk sample, event kecil, sampai produksi merchandise massal.
          </p>
          <Button
            variant="secondary"
            className="mt-4"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi kebutuhan pouch
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}