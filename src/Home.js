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
  bigscreen: "1400px"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
       <Navbar />
        <GlobalStyles />
        <Welcome />
        <Projects />
        <Partners />

        <About />
        <WWdo />
        <Contact />
        <SocialMedia />
      </>
    </ThemeProvider>
  );
}

export default App;
