import "./App.css";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
