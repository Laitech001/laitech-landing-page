import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header'
import Home from './homepage/home'
import Footer from './components/footer'
import ServicePage from './sevicepage/servicePage'
import About from './about/about'
import DevTeam from './devteam/devteam'
import ContactPage from './contact/contact'
import NotFound from './components/NotFound'

function App() {

  if (!navigator.onLine) {
    return (<p>You are offline. Check your internet connection.</p>)
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devteam" element={<DevTeam />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
