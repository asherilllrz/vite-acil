import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiDart, SiFlutter } from "react-icons/si";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, Selamat Datang di Website Asheril!";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, speed);

    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <section className="home">
        <div className="home-content">
          <h3>{displayText}</h3>
          <h1>
            Aku <span>Asheril</span><br />ini adalah Website pertamaku
          </h1>
          <p>
            ini adalah pertama kalinya aku belajar membuat website menggunakan HTML, CSS, dan JavaScript
          </p>
          <div className="btn-box">
            <button className="btn-1">Hubungi Aku</button>
            <a href="https://www.instagram.com/acillllrz" target="_blank" rel="noreferrer">
              <button className="btn-2">Instagram Aku</button>
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src="/assets/Asheril.jpg" alt="Foto Asheril" />
        </div>
      </section>
      <section className="stack">
        <h2>🔧 Bahasa Pemrograman & Framework yang Aku Pelajari</h2>
        <div className="stack-container">
          <div className="stack-item">
            <FaHtml5 size={50} color="#E44D26" />
            <p>HTML</p>
          </div>
          <div className="stack-item">
            <FaCss3Alt size={50} color="#1572B6" />
            <p>CSS</p>
          </div>
          <div className="stack-item">
            <FaJsSquare size={50} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div className="stack-item">
            <FaReact size={50} color="#61DBFB" />
            <p>React</p>
          </div>
          <div className="stack-item">
            <SiDart size={50} color="#0175C2" />
            <p>Dart</p>
          </div>
          <div className="stack-item">
            <SiFlutter size={50} color="#02569B" />
            <p>Flutter</p>
          </div>
        </div>
      </section>
    </>
  );
}
