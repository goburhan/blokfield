import "./Style/App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Partners from "./Components/Partners";
import Members from "./Components/Co-member";
import WWdo from "./Components/WeDo";
import Contact from "./Components/Contact";
import { ThemeProvider } from "styled-components";
import SocialMedia from "./Components/SocialMedia";
import GlobalStyles from "./Style/Global";

const theme = {
  mobile: "768px",
  laptops: "992px",
  tablet: "1024px",
  bigscreen: "1400px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <GlobalStyles />
        <Welcome />
        <div className="mt-20">
          <Projects />
        </div>
        <div className="mt-40">
          <Partners />
        </div>
        <div className="mt-40">
          <About />
        </div>

        <WWdo />
        <div className="mt-40">
          <Contact />
        </div>
        <div className="mb-20 mt-40">
          <SocialMedia />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
