import logo from "./logo.svg";
import "./Style/App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import About  from "./Components/About";
import Partners from "./Components/Partners";
import Members from "./Components/Co-member";
import WWdo from "./Components/WeDo";
import Contact from "./Components/Contact";
import SocialMedia from "./Components/SocialMedia";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="grid grid-cols-1 ml-12 mr-12 gap-20 p-24">
        <div>
          <Welcome />
        </div>
        <div>
          <Projects />
        </div>
        <Partners />
        <div>
          <Members/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <WWdo/>
        </div>
        <div>
        <Contact/>
        </div>
        <div>
          <SocialMedia/>
        </div>
      </div>
    </div>
  );
}

export default App;
