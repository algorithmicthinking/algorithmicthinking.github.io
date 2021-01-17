import "./App.css";
import "./css/style.css";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Syllabus from "./pages/Syllabus";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <div className="container">
        <Landing />
        <Team />
        <Resources />
        <Syllabus />
      </div>
    </div>
  );
}

export default App;
