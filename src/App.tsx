import NavBar from './components/NavBar'
import About from './pages/About'
import Stack from './pages/Stack'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-[#070B14]'>
      <NavBar />
      <About />
      <hr className='mx-20 text-[#1C2840]' />
      <Stack />
      <hr className='mx-20 text-[#1C2840]' />
      <Projects />
      <hr className='mx-20 text-[#1C2840]' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
