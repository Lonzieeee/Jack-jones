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
          <a href="#" className="see-more">SEE MORE</a>
        </div>
      </div>

      {/* You Might Be Interested In */}
      <div className="interested-in">
        <h3>YOU MIGHT BE INTERESTED IN</h3>
        <div className="interested-grid">
          <ul>
            <li>MOST POPULAR</li>
            <li>DENIM JACKETS</li>
            <li>T-SHIRTS</li>
            <li>BOOTS</li>
            <li>JEANS</li>
            <li>BUSINESS SHIRTS</li>
            <li>HOODIES</li>
            <li>PLUS SIZE</li>
          </ul>
          <ul>
            <li>CARGO PANTS</li>
            <li>BLAZERS</li>
            <li>LEATHER JACKETS</li>
            <li>SWEATSHIRTS</li>
            <li>LOOSE FIT JEANS</li>
            <li>JOGGERS</li>
            <li>CHECKED SHIRTS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
