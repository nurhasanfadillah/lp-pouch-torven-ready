import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import StickyWhatsAppBar from "@/components/layout/StickyWhatsAppBar"
import Hero from "@/components/sections/Hero"
import TrustStrip from "@/components/sections/TrustStrip"
import ProblemSolution from "@/components/sections/ProblemSolution"
import Testimonials from "@/components/sections/Testimonials"
import ProductDetails from "@/components/sections/ProductDetails"
import DtfWorkflow from "@/components/sections/DtfWorkflow"
import UseCases from "@/components/sections/UseCases"
import Pricing from "@/components/sections/Pricing"
import WhyJisoi from "@/components/sections/WhyJisoi"
import Faq from "@/components/sections/Faq"
import FinalCta from "@/components/sections/FinalCta"

function App() {
  return (
    <div className="min-h-screen bg-torven-cream">
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <WhyJisoi />
        <Testimonials />
        <ProductDetails />
        <DtfWorkflow />
        <UseCases />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsAppBar />
    </div>
  )
}

export default App
