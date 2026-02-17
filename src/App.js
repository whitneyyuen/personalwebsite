import Navbar2 from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Experiences from "./components/Experiences/experiences";
import Contact from "./components/Contact/contact";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    /*<div className="App">
      <Navbar2 />
      <div className="maincontent">
        <Intro />
        {/* 
      <Skills/>
      *//*}
      <Contact />
    </div>
    <Footer />
  </div>*/
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-40">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
      </div>
      <Navbar2 />
      <main>
        <Intro />
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
