import { Routes, Route } from 'react-router'
import './App.css'
import Header from './pages/header'
import Home from './pages/home'
import Footer from './pages/footer'
import ServicePage from './pages/servicePage'
import About from './about/about'
import DevTeam from './devteam/devteam'
import ContactPage from './contact/contact'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devteam" element={<DevTeam />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
