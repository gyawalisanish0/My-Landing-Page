import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import OtherWork from './components/OtherWork'
import Donate from './components/Donate'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <About />
        <Projects />
        <OtherWork />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

export default App
