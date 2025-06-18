import Container from "@/components/container"
import About from "@/components/landing/about"
import Contact from "@/components/landing/contact"
import Features from "@/components/landing/features"
import Hero from "@/components/landing/hero"

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <About />
      <Contact />
    </Container>
  )
}
