import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUserAlt, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./Header.css";

function Header() {
  const location = useLocation(); // Hook to get the current path

  return (
    <header>
      {/* Top row for MEN/WOMEN */}
      <div className="header-top">
        <div className="menu-links">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: location.pathname === "/" ? "#000" : "transparent",
              color: location.pathname === "/" ? "#fff" : "#000",
              padding: "6px 12px",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            MEN
          </Link>
          <Link
            to="/women"
            style={{
              textDecoration: "none",
              backgroundColor: location.pathname === "/women" ? "#000" : "transparent",
              color: location.pathname === "/women" ? "#fff" : "#000",
              padding: "6px 12px",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            WOMEN
          </Link>
        </div>
        <Link
          to="/"
          className="brand-name"
        >
          JACK&JONES
        </Link>
        <div className="icons">
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              type="text"
              placeholder="SEARCH..."
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "8px 16px",
                outline: "none",
                fontSize: "14px",
                width: "120px",
                backgroundColor: "transparent",
                transition: "border-color 0.3s",
                paddingRight: "30px",
                color: "#000",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#000")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
            <FaSearch
              size={20}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#777",
              }}
            />
          </div>
          <FaUserAlt
            size={20}
            style={{
              cursor: "pointer",
              transition: "color 0.3s",
              color: "#777",
            }}
          />
          <FaHeart
            size={20}
            style={{
              cursor: "pointer",
              transition: "color 0.3s",
              color: "#777",
            }}
          />
          <FaShoppingBag
            size={20}
            style={{
              cursor: "pointer",
              transition: "color 0.3s",
              color: "#777",
            }}
          />
        </div>
      </div>

      {/* Middle row for navigation */}
      <div className="nav-links">
        <Link
          to="https://www.jackjones.com/en-us/new-in"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          NEW IN
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/clothing"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          CLOTHING
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/denim"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          DENIM
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/shoes"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          SHOES
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/accessories"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          ACCESSORIES
        </Link>
        <Link
          to="/premium"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          PREMIUM
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/premium"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          PLUS SIZE
        </Link>
        <Link
          to="https://www.jackjones.com/en-us/plus-size"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          A/BETTER WORLD
        </Link>
      </div>
    </header>
  );
}

export default Header;
