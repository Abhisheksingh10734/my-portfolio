import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"
import { Github } from "./sections/Github"
import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"
import { Projects } from "./sections/Projects"

function App() {
  return (
    <div className="w-full h-screen bg-[#0A0F1E]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
