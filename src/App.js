import "./App.css";
import "./css/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Team from "./pages/Team";
import Syllabus from "./pages/Syllabus";
import Footer from "./components/Footer";

import Sp21 from "./sp21/src/App";

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <Switch>
          <Route path="/sp21">
            <Sp21 />
          </Route>
          <Route path="/">
            <Navbar />
            <div className="container">
              <Landing />
              <Team />
              <Syllabus />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
