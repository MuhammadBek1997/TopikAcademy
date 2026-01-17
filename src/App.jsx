import './App.css'
import CourseCards from './pages/CourseCards'
import FAQ from './pages/FAQ'
import Footer from './pages/Footer'
import GrantChance from './pages/GrantChance'
import Header from './pages/Header'
import OurAcademy from './pages/OurAcademy'
import OurHelp from './pages/OurHelp'
import OurResults from './pages/OurResults'
import Support from './pages/Support'
import WhyOurAcademy from './pages/WhyOurAcademy'

function App() {

  return (
    <>
      <Header/>
      <OurAcademy/>
      <OurResults/>
      <GrantChance/>
      <OurHelp/>
      <CourseCards/>
      <WhyOurAcademy/>
      <FAQ/>
      <Support/>
      <Footer/>
    </>
  )
}

export default App
