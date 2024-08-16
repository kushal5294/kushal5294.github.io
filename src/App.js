import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
