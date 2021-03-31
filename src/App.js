import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Switch>
          <Route path="/services" component={Services} />
        </Switch>

        <Switch>
          <Route path="/products" component={About} />
        </Switch>

        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
