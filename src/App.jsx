import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DecorativeBackdrop from './components/DecorativeBackdrop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import AllWorks from './pages/AllWorks'
import Contact from './pages/Contact'
import CreativePortfolio from './pages/CreativePortfolio'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timeoutId)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-white via-lilac-50 to-accent-pink/30 p-6 text-center">
        <div className="animate-fadeInUp space-y-4">
          <p className="eyebrow">Portfolio</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-lilac-700 via-lilac-600 to-lilac-400 bg-clip-text text-transparent">
              Princess Angel Paslot
            </span>
          </h1>
          <div className="mx-auto flex justify-center gap-2 text-lilac-400/70" aria-hidden>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lilac-400" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lilac-400 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lilac-400 [animation-delay:240ms]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-lilac-50/90 to-accent-sky/20">
      <DecorativeBackdrop />

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-8 md:pb-16">
          <div key={location.pathname} className="animate-fadeInUp">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/creative-portfolio" element={<CreativePortfolio />} />
              <Route path="/all-works" element={<AllWorks />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
