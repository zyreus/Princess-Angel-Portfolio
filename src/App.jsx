import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import CreativePortfolio from './pages/CreativePortfolio'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50/60 to-white">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.14)_1px,transparent_0)] bg-[length:24px_24px] opacity-30" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/creative-portfolio" element={<CreativePortfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
