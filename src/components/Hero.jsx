import React from "react";
import backgroundImage from "../Assets/Images/jeans.webp";

function Hero() {
  return (
    <section
      style={{
        height: "80vh", // Set hero section height to 80% of the viewport height
        backgroundImage: `url(${backgroundImage})`, // Use the imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px", // Adding some padding for responsiveness
      }}
    >
      {/* Removed the overlay */}
      {/* Removed the text */}
    </section>
  );
}

export default Hero;
