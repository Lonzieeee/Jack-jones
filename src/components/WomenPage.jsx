import React from 'react';
import CategoryBelt from './CategoryBelt';
import jeansImage from '../Assets/Images/herowomen.webp'; // Women's hero image

const WomenPage = ({ firstCategories, secondCategories }) => {
  return (
    <div style={{ backgroundColor: "white", margin: 0 }}>
      <div style={{ margin: "0 1.5%" }}> {/* Reduced margins to 1.5% */}
        {/* Hero Section */}
        <section className="hero" style={{ backgroundColor: "#FFFFFF", marginTop: "20px" }}>
          <img 
            src={jeansImage}
            alt="Women's Fashion Hero"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </section>

        {/* Category Belt - First Belt */}
        <section className="category-belt" style={{ marginTop: "-20px", backgroundColor: "#FFFFFF" }}>
          <CategoryBelt categories={firstCategories} />
        </section>

        {/* Video Section */}
        <section className="video-section" style={{ position: "relative", width: "100%", height: "100vh", marginTop: "-20px" }}>
          <h2 style={{ textAlign: "center", position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)" }}>
            Explore Our Collection
          </h2>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}>
            <iframe
              src="https://player.vimeo.com/video/1042861077?title=0&muted=1&loop=1&app_id=122963"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Latest Looks Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "transparent",
                objectFit: "cover",
              }}
            ></iframe>
          </div>
        </section>

        {/* Category Belt - Second Belt */}
        <section className="category-belt" style={{ backgroundColor: "#FFFFFF" }}>
          <CategoryBelt categories={secondCategories} />
        </section>

        {/* No About Section Here */}
      </div>
    </div>
  );
};

export default WomenPage;
