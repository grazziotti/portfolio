import { About } from './components/About'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <footer>footer</footer>
    </>
  )
}
