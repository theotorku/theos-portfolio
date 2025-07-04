import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import References from './components/References'
import Contact from './components/Contact'
import CoverLetter from './components/CoverLetter'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box px={{ base: 4, md: 16 }} pb={12}>
              <Header />
              <About />
              <Projects />
              <Experience />
              <References />
              <Contact />
            </Box>
          }
        />
        <Route path="/cover-letter" element={<CoverLetter />} />
      </Routes>
    </Router>
  )
}

export default App
