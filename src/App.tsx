import { useCallback, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from './components/About'
import { Community } from './components/Community'
import { Contact } from './components/Contact'
import { Entrance } from './components/Entrance'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { SignalRail } from './components/SignalRail'

export default function App() {
  const [ready, setReady] = useState(false)

  const finishIntro = useCallback(() => {
    setReady(true)
    window.setTimeout(() => ScrollTrigger.refresh(), 80)
  }, [])

  return (
    <div id="top">
      {!ready && <Preloader onDone={finishIntro} />}
      <Navbar visible={ready} />
      <SignalRail visible={ready} />
      <main>
        <Entrance />
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
