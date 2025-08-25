import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo"><span>Website Asheril</span></a>
      <nav className="navbar">
        <Link to="/" className="active">Fortofolio</Link>
        <Link to="/about">About Me</Link>
      </nav>
      <Link to="/contact" className="contact">Contact Me</Link>
    </header>
  );
}

