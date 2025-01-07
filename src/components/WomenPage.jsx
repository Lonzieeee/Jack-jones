import React from "react";
import CategoryBelt from "./CategoryBelt";
import Footer from "./Footer";

// Import images for the hero section and category belts
import HeroImage from "../Assets/Images/herowomen.webp"; // Import the hero image

// Import images for the first category belt
import SweatshirtsImage from "../Assets/Images/Sweatshirts.webp";
import shirtsImage from "../Assets/Images/shirts.webp";
import FjeansImage from "../Assets/Images/Fjeans.webp";
import outwearImage from "../Assets/Images/outwear.webp";
import knitwearImage from "../Assets/Images/knitwear.webp";
import pantsImage from "../Assets/Images/pants.webp";

// Import images for the second category belt
import blackImage from "../Assets/Images/black.webp";
import whiteImage from "../Assets/Images/white.webp";
import sitImage from "../Assets/Images/sit.webp";
import denimImage from "../Assets/Images/denim.webp";

// Data for the first belt
const firstCategories = [
  { id: 1, name: "Sweatshirts",
     image: SweatshirtsImage,
    link: "https://www.jackjones.com/en-us/jjxx/sweatshirts",
     },
  { id: 2, name: "Shirts", 
    image: shirtsImage,
  link: "https://www.jackjones.com/en-us/jjxx/jeans",

},
  {
    id: 3,
    name: "Fjeans",
    image: FjeansImage,
    link: "https://www.jackjones.com/en-us/jjxx/jeans", // Add the link here
  },
  {
    id: 4,
    name: "Outwear",
    image: outwearImage,
    link: "https://www.jackjones.com/en-us/jjxx/jackets-coats", // Add the link here
  },
  { id: 5, name: "Knitwear", 
    image: knitwearImage,
  link: "https://www.jackjones.com/en-us/jjxx/knitwear", },

  { id: 6, name: "Pants", 
    image: pantsImage,
  link:"https://www.jackjones.com/en-us/jjxx/trousers", },
];

// Data for the second belt
const secondCategories = [
  { id: 1, name: "Black", 
    image: blackImage,
    link:"https://www.jackjones.com/en-us/jjxx/lookbook", 
  },
  { id: 2, name: "White", 
    image: whiteImage,
  link: "https://www.jackjones.com/en-us/jjxx/lookbook",
  },
  { id: 3, name: "Sit", 
    image: sitImage,
  link: "https://www.jackjones.com/en-us/jjxx/lookbook",
  },
  { id: 4, name: "Denim",
     image: denimImage,
    link: "https://www.jackjones.com/en-us/jjxx/lookbook",
     },
];

const WomenPage = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}> {/* Set background to transparent */}
      {/* Hero Section */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {/* Use the imported HeroImage */}
        <img
          src={HeroImage}
          alt="Women's Fashion Hero"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            marginTop: "20px",
          }}
        />
      </div>

      {/* First Category Belt */}
      <div style={{ margin: "50px 0" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#333" }}>
          Explore Our Favorites
        </h2>
        <CategoryBelt categories={firstCategories} />
      </div>

      {/* Video Section */}
      <div style={{ margin: "50px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#333" }}>
          Check Out Our Latest Looks
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Placeholder for your video or additional content.
        </p>
        <iframe
          src="https://player.vimeo.com/video/1039938832?title=0&muted=1&app_id=122963"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Latest Looks Video"
        ></iframe>
      </div>

      {/* Second Category Belt */}
      <div style={{ margin: "50px 0" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#333" }}>
          More To Love
        </h2>
        <CategoryBelt categories={secondCategories} />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default WomenPage;
