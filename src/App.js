import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import "./index.css";
import { Element, animateScroll as scroll } from "react-scroll";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar className="fixed" />
          <Home />
          <Element name="Features">
            <Features />
          </Element>
          <Element name="Pricing">
            <Pricing />
          </Element>
          <Element name="FAQ">
            <FAQ />
          </Element>
          <Element name="Testimonials">
            <Testimonials />
          </Element>
          <button onClick={scrollToTop}>Scroll to Top</button>
        </div>
      </Router>
    </>
  );
}

//   return (
//     <>
//       <Router>

//         <Routes>
//           <Route path="/" element="Home" />
//           <Route path="/services" element="Services" />
//           <Route path="/about" element="About" />
//           <Route path="/contact" element="Contact" />
//         </Routes>
//       </Router>
//     </>
//   );
// }

export default App;
