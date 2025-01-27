import React, { useEffect, useRef } from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import slmmyImage from "../../../assets/slimjim.jpeg";
import profileImage from "../../../assets/dp.jpg";
import Drone from "../../../assets/Drone.jpeg"
import lamp from "../../../assets/3d3.jpg"
import dd from "../../../assets/3d1.jpg"
import PCB from "../../../assets/pcb.jpg"
import hard_cons from "../../../assets/consult.png"

const App = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in"); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );
  
    // Store the current references in a variable
    const currentRefs = cardRefs.current;
  
    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });
  
    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  

  const cardData = [
    {
      title: "FPV Drone",
      content: "Experience the thrill of flying programmable drones with ease.",
      image: Drone,
      link: "/fpv-drone", // Example placeholder
    },
    {
      title: "3D Printing",
      content: "Illuminate your space with beautifully crafted 3D printed lamps.",
      image: dd,
      link: "/3d-printing", // Example placeholder
    },
    {
      title: "Embedded Projects",
      content: "Explore robotics with our innovative SlamBot technology.",
      image: slmmyImage,
      link: "/slambot", // Example placeholder
    },
    {
      title: "PCB Designing",
      content: "Build and customize your drone with our easy-to-use kits.",
      image: PCB,
      link: "/pcb-design", // Route to the PCBDesignPage
    },
    {
      title: "3D Designing",
      content: "Combine art and technology with robotic lamp holders.",
      image: lamp,
      link: "/lamps", // Example placeholder
    },
    {
      title: "Hardware Consultations",
      content: "Unlock the potential of AI with our intelligent drones.",
      image: hard_cons,
      link: "/hardware-consultations", // Example placeholder
    },
  ];
  


  return (
    <div>
      <div className="App first-div">
        <div className="overlay"></div>
          <div className="content">
            <h1>Tech Tinkerer</h1>
            <p>PCB DESIGN / IOT PROJECTS / 3D DESIGNS</p>
          </div>
      </div>

      <div className="second-div themed-container">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div className="card hidden" key={index} ref={(el) => (cardRefs.current[index] = el)}style={{ backgroundImage: `url(${card.image})` }}>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-body">{card.content}</p>
                <Link to={card.link} className="button">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="about-me-section">
  <div className="about-me-content">
    <div className="about-me-image">
      <img
        src = {profileImage}
        alt="Profile"
      />
    </div>
    <div className="about-me-text">
      <h2>ABOUT ME</h2>
      <h3 className="about-me-name">
  <div className="name-first">Atul Mehta</div>
  <div className="name-rest">
    <span>- EXTC Engineer</span>
  </div>
</h3>

      <p class="about-me-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="about-me-links">
  <a href="https://github.com/atulmehta2002" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
    <span>GitHub</span>
  </a>
  <a href="https://www.linkedin.com/in/atul-mehta-2002/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />
    <span>LinkedIn</span>
  </a>
  <a href="https://www.instagram.com/the.techtinkerer/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
    <span>Twitter</span>
  </a>
  <a href="https://www.instagram.com/the.techtinkerer/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
    <span>Instagram</span>
  </a>
</div>


    </div>
  </div>
</div>


      
    </div>
  );
};

export default App;

      

 