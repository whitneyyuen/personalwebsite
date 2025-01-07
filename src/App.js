import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Contact from "./components/Contact/contact";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      {/* 
      <Skills/>
      */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
