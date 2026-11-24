import { Suspense, lazy, useEffect, useLayoutEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DecorativeBackdrop from './components/DecorativeBackdrop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const About = lazy(() => import('./pages/About'))
const Achievements = lazy(() => import('./pages/Achievements'))
const AllWorks = lazy(() => import('./pages/AllWorks'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))
const CreativePortfolio = lazy(() => import('./pages/CreativePortfolio'))
const Experience = lazy(() => import('./pages/Experience'))
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Resume = lazy(() => import('./pages/Resume'))
const Skills = lazy(() => import('./pages/Skills'))

function App() {
  const location = useLocation()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const hashTarget = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null

      if (hashTarget) {
        hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname, location.search])

  return (
    <div className="premium-shell">
      <DecorativeBackdrop />

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto w-full max-w-[1280px] px-6 pb-12 md:pb-16 lg:px-8">
          <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
            <div key={location.pathname} className="animate-fadeInUp">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/creative-portfolio" element={<CreativePortfolio />} />
                <Route path="/all-works" element={<AllWorks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
