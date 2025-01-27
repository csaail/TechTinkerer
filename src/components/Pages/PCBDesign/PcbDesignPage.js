import React, { useEffect, useRef, useState } from "react";
import "./PcbDesignPage.css";
import PCBImage from "../../../assets/fc.png";

function PcbDesignPage() {
  const tiltRef = useRef(null);
  const magnifyRef = useRef(null);
  const glassRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay for the page reveal animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Magnification logic
    const magnify = magnifyRef.current;
    const glass = glassRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = magnify.getBoundingClientRect();
      const relativeX = e.clientX - left;
      const relativeY = e.clientY - top;

      if (
        relativeX > 0 &&
        relativeY > 0 &&
        relativeX < width &&
        relativeY < height
      ) {
        glass.style.display = "block";
        glass.style.left = `${relativeX - glass.clientWidth / 2}px`;
        glass.style.top = `${relativeY - glass.clientHeight / 2}px`;

        const bgPositionX = Math.round(
          (relativeX / magnify.clientWidth) * 100
        );
        const bgPositionY = Math.round(
          (relativeY / magnify.clientHeight) * 100
        );

        glass.style.backgroundPosition = `${bgPositionX}% ${bgPositionY}%`;
      } else {
        glass.style.display = "none";
      }
    };

    magnify.addEventListener("mousemove", handleMouseMove);

    return () => magnify.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`pcb-design-page ${isLoaded ? "loaded" : ""}`}>
      <div className="container">
        {/* Left side with PCB image */}
        <div ref={tiltRef} className="tilt">
          <div ref={magnifyRef} className="magnify">
            <img src={PCBImage} alt="PCB Design" className="pcb-image" />
            <div
              ref={glassRef}
              className="glass"
              style={{
                backgroundImage: `url(${PCBImage})`,
              }}
            ></div>
          </div>
        </div>

        {/* Right side with text */}
        <div className="content">
          <h1 className="header">PCB Designing</h1>
          <p className="description">
            I specialize in designing high-quality and complex PCBs tailored to
            your needs. My expertise ensures that your ideas turn into
            production-ready designs efficiently and cost-effectively.
          </p>
          <p className="description">
            From schematic creation to layout design and manufacturing files, I
            provide comprehensive PCB design services.
          </p>

          {/* Animated checkmark list */}
          <div className="textanim">
            <p>
              <span className="text">✔ Schematic Capture</span>
            </p>
            <p>
              <span className="text">✔ High-Speed Layout Design</span>
            </p>
            <p>
              <span className="text">✔ DFM/DFT Validation</span>
            </p>
            <p>
              <span className="text">✔ BOM Preparation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcbDesignPage;
