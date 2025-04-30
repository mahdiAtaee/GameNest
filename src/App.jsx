import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import HeroHeader from './components/HeroHeader'
import Navbar from './components/Navbar'
import Story from './components/Story'

function App() {

  return (
    <main className='w-screen min-h-dvh relative overflow-x-hidden'>
      <Navbar />
      <HeroHeader />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
