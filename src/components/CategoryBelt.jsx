import React, { useEffect, useState } from "react";
import "./CategoryBelt.css"; // Link to CSS for styling

function CategoryBelt({ categories }) {
  const [displayedCategories, setDisplayedCategories] = useState(categories.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedCategories((prev) => {
        // Shift images
        const updatedCategories = [...prev.slice(1), prev[0]]; // Move the first image to the end
        return updatedCategories;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [categories]);

  return (
    <section className="category-belt">
      <div className="category-belt-wrapper">
        {displayedCategories.map((category) => (
          <div className="category-belt-item" key={category.id}>
            <a 
              href={category.link || "#"} // Use the link if provided; otherwise, use "#"
              target={category.link ? "_blank" : "_self"} // Open in a new tab only if the link is provided
              rel={category.link ? "noopener noreferrer" : undefined} // Add security attributes for external links
            >
              <img 
                src={category.image} 
                alt={category.name} 
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </a>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryBelt;
