import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Achievements from './components/Achievement'

function App() {
  return (
    <div>
        <Header />
        <main>
            <About />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default App