import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { TESTIMONIALS } from "@/data/landingContent"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Dipercaya oleh ribuan pelanggan puas
          </h2>
          <p className="text-lg text-torven-text/60 max-w-2xl mx-auto">
            Dengarkan pengalaman nyata dari mereka yang sudah menggunakan TORVEN untuk merchandise dan event mereka.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:max-w-4xl md:mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-auto bg-torven-cream rounded-[24px] p-6 border border-torven-border hover:border-torven-navy/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-torven-amber text-torven-amber"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-torven-text/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="text-sm font-semibold text-torven-text">
                  {testimonial.name}
                </p>
                <p className="text-xs text-torven-text/60">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-torven-text/60">
            <span className="font-semibold text-torven-navy">✓ 99%</span> kepuasan pelanggan berdasarkan 500+ ulasan
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
