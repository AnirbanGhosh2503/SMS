import React, { useState, useEffect } from "react";
import "./Hero.css";
import CountUp from 'react-countup';
import LoginModal from "./LoginModal"; // 👈 Import the modal

const words = ["smart", "organized", "efficient", "engaging", "modern"];

function Hero({ onLoginClick }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showLogin, setShowLogin] = useState(false); // 👈 State to toggle modal

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-between px-4">
        {/* Left Text Section */}
        <div className="text-section col-md-6 mb-4">
          <h1 className="main-heading fw-bold text-white">
            Manage, Educate, <span className="text-blue">Excel</span>!
          </h1>
          <p className="sub-heading mt-4 text-white">
            Our School Management System is <br />{" "}
            <span className={`text-changing fw-bold ${fade ? "fade-in" : "fade-out"}`}>
              {words[currentWordIndex]}
            </span>{" "}
            for teachers, students, and admins.
          </p>
          <button className="btn btn-primary btn-lg mt-5" onClick={onLoginClick}>
            Login
          </button>


          <div className="stats d-flex flex-wrap gap-5 mt-5 text-white">
            <div>
              <h3 className="text-blue fw-bold">
                <CountUp end={1200} duration={3} separator="," />+
              </h3>
              <p>Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-blue fw-bold">
                <CountUp end={80} duration={3} />+
              </h3>
              <p>Teachers</p>
            </div>
            <div>
              <h3 className="text-blue fw-bold">
                <CountUp end={30} duration={3} />+
              </h3>
              <p>Courses Offered</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section col-md-6 position-relative text-center mt-5 mt-md-0">
          <div className="img-wrapper position-relative">
            <img
              src="/MIS.png"
              alt="School Illustration"
              className="img-fluid rounded-circle shadow-lg big-image"
            />
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default Hero;
