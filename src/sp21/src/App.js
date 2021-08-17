import "./App.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Team from "./pages/Team";
import Syllabus from "./pages/Syllabus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <div className="container">
        <Landing />
        <Team />
        <Syllabus />
        <Footer />
      </div>
    </div>
  );
}

export default App;
