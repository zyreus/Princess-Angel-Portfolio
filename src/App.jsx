import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
    const timeoutId = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timeoutId)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-white via-purple-100 to-violet-200 p-6 text-center">
        <div className="animate-fadeInUp space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">Portfolio</p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Princess Angel Paslot
            </span>
          </h1>
        </div>
      </div>
    )
  }

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
