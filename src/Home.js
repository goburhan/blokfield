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
      <div className="grid grid-cols-1 sm:ml-4 sm:mr-4 ml-24 mr-24 gap-20 sm:p-0 lg:p-24">
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
        <div >
          <SocialMedia/>
        </div>
      </div>
    </div>
  );
}

export default App;
