import React from 'react';
import CategoryBelt from './CategoryBelt';  // Ensure you import CategoryBelt component

// Import the image properly
import jeansImage from '../Assets/Images/jeans.webp';  // Adjust path as needed

const MenPage = ({ firstCategories, secondCategories }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src={jeansImage} // Use imported image
          alt="Men's Fashion Hero"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </section>

      {/* Category Belt - First Belt */}
      <section className="category-belt">
        <h2>Shop by Category</h2>
        <CategoryBelt categories={firstCategories} />
      </section>

      {/* Video Section - Full-width and Full Height */}
      <section className="video-section" style={{ position: "relative", width: "100%", height: "500px", margin: "5px 0" }}>
        <h2 style={{ textAlign: "center" }}>Check Out Our Latest Looks</h2>
        <iframe
          src="https://player.vimeo.com/video/1039938832?title=0&muted=1&app_id=122963"
          width="100%"  // Full width
          height="100%"  // Full height
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Latest Looks Video"
          style={{
            position: "absolute", 
            top: 0, 
            left: 0, 
            background: "transparent", // Makes the background transparent
          }}
        ></iframe>
      </section>

      {/* Category Belt - Second Belt */}
      <section className="category-belt">
        <h2>Featured Categories</h2>
        <CategoryBelt categories={secondCategories} />
      </section>
    </div>
  );
};

export default MenPage;

// Inside MenPage
console.log("MenPage rendered");
