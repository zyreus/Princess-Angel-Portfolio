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
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-white">
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
  )
}

export default App
