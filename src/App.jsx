import { Box } from '@mui/material'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ProjectReel from './components/ProjectReel.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import IntroWipe from './components/IntroWipe.jsx'

export default function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <IntroWipe />
      <Nav />
      <Hero />
      <ProjectReel />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  )
}
