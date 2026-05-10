import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK, PROBLEM_SOLUTIONS } from "@/data/landingContent"
import { XCircle, CheckCircle } from "lucide-react"

export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white" id="solusi">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1]">
            Vendor merchandise sering ribet. TORVEN dibuat lebih fleksibel.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-[20px] overflow-hidden border border-torven-border"
            >
              <div className="flex items-start gap-3 px-4 py-3 bg-red-50">
                <XCircle className="w-5 h-5 text-torven-navy mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-torven-text/70">{item.problem}</span>
              </div>
              <div className="flex items-start gap-3 px-4 py-3 bg-torven-cream">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-torven-text">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button variant="secondary" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi kebutuhan pouch
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
