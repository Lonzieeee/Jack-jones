import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      {/* About Text */}
      <div className="about-container">
        <div className="about-text">
          <h2>JACK & JONES US - MEN'S CLOTHING & SHOES</h2>
          <p>
            Welcome to JACK & JONES, your ultimate destination for men's clothing
            and shoes! Whether you're into keeping up with the latest <a href="#">trends</a> or a
            die-hard <a href="#">denim</a> enthusiast, we've got you covered.
          </p>
          <p>
            Since 1990, our mission has been to provide you guys with the coolest
            clothes for every occasion. At JACK & JONES, we're all about staying
            ahead of the curve when it comes to men's fashion trends. From
            streetwear staples to classic essentials, we've got the styles that
            will keep you looking fresh and on point.
          </p>
          <p>
            At JACK & JONES, we believe that nobody should go without a stylish
            wardrobe. Whether you're big, small, young, or old, there's something
            for everyone. That's right, we offer trendy <a href="#">plus-size</a> clothing for men
            and cool clothes for young <a href="#">boys</a> too.
          </p>
          <p>
            We're all about jeanswear and designing cool denim clothes, but we're
            not stopping there. From killer denim styles to dope bomber jackets and
            classy <a href="#">suits</a>, we've got everything you need to upgrade your wardrobe
            and turn heads wherever you go. We've got you covered from head to toe,
            whether you're dressing to impress on a date, chilling with your
            friends, or a smart-casual outfit for work.
          </p>
          {/* <a href="#" className="see-more">SEE MORE</a> */}
        </div>
      </div>

      {/* You Might Be Interested In */}
      <div className="interested-in">
        <h3>YOU MIGHT BE INTERESTED IN</h3>
        <div className="interested-grid">
          <ul>
          <li>
              <a 
                href="https://www.jackjones.com/en-us/most-popular" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
                MOST POPULAR
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/jackets/denim-jackets" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
               DENIM JACKETS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/t-shirts" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
                T-SHIRTS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/shoes/boots" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
               BOOTS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/jeans" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
              JEANS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/shirts/formal-shirts" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
               BUSINESS SHIRTS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/sweatshirts/hoodies" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
             HOODIES
              </a>
            </li>
            
            <li>
              <a 
                href="https://www.jackjones.com/en-us/plus-size" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
             PLUS SIZE
              </a>
            </li>
          </ul>
          <ul>
          <li>
              <a 
                href="https://www.jackjones.com/en-us/trousers/cargo-trousers" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
              CARGO-PANTS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/tailoring/blazers" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
              BLAZERS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/jeans/loose-fit-jeans" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
               LOOSE FIT JEANS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/shirts/check-shirts" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
              CHECKED SHIRTS
              </a>
            </li>
            <li>
              <a 
                href="https://www.jackjones.com/en-us/jackets/leather-jackets" 
                // target="_blank" 
                rel="noopener noreferrer"
                className="popular-link"
              >
               LEATHER JACKETS
              </a>
            </li>
           
           
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
