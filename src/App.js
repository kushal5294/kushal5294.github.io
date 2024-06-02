import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
