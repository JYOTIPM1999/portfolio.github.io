import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { GithubStats } from './components/GithubStats'
import { Contact } from './components/Contact'
import { init } from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    init({
      duration: 1500,
      easing: 'linear',
    })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  )
}

export default App
