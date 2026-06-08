import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"

function App() {
  return (
    <div className="w-full h-screen bg-[#0A0F1E]">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
