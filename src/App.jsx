import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

 
      {showButton && (
        <button
          onClick={scrollToTop}
          id="scrollTopBtn"
          title="Kembali ke atas"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            borderRadius: "50%",
            border: "none",
            background: "#333",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      )}
    </Router>
  );
}

export default App;

