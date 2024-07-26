// App.js
import React,{useEffect} from "react";
import { BrowserRouter as Router,useLocation } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import { logPageView } from './analytics';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    <Router>
      <PageViewTracker />
      <Navbar />
      <div id="#">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </Router>
  );
}


const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

export default App;
