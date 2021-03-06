import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Booking from "./components/Pages/Booking";
import SignUp from "./components/Pages/SignUp";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
