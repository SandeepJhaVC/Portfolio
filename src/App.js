import Header, { HeaderPhone } from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx"
import Timeline from "./components/Timeline.jsx"
import Services from "./components/Services.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react";

function App() {

  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    const resizeRatio=()=>{
      setRatio(window.innerWidth / window.innerHeight)
    }
    window.addEventListener("resize",resizeRatio)
    return()=>{
      window.removeEventListener("resize",resizeRatio)
    }
  },[ratio])

  return ratio < 2 ?(
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio}/>
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ):<em id="customMessage">Please Change the ratio to View!</em>;
}

export default App;
