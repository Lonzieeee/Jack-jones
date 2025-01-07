import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WomenPage from "./components/WomenPage";
import MenPage from "./components/MenPage"; // Ensure this component exists
import "./styles/global.css";
// Data for the first belt (Men)
import tshirtsImage from "./Assets/Images/tshirts.webp";
import outwearImage from "./Assets/Images/outwear.webp";
import tailoringImage from "./Assets/Images/tailoring.webp";
import shirtsImage from "./Assets/Images/shirts.webp";
import shortsImage from "./Assets/Images/shorts.webp";
import trousersImage from "./Assets/Images/trousers.webp";
// Data for the second belt (Men)
import bestImage from "./Assets/Images/best.webp";
import newInImage from "./Assets/Images/newin.webp";
import premiumImage from "./Assets/Images/premium.webp";
import plusSizeImage from "./Assets/Images/plussize.webp";
// Data for the first belt (Women)
import FjeansImage from "./Assets/Images/Fjeans.webp";
import outerwearImage from "./Assets/Images/outerwear.webp";
import knitwearImage from "./Assets/Images/knitwear.webp";
import FshirtsImage from "./Assets/Images/Fshirts.webp";
// Data for the second belt (Women)
import sitImage from "./Assets/Images/sit.webp";
import whiteImage from "./Assets/Images/white.webp";
import blackImage from "./Assets/Images/black.webp";
import pinkImage from "./Assets/Images/pink.webp";
// Organize categories
const menFirstCategories = [
  { id: 1, name: "T-Shirts", image: tshirtsImage },
  { id: 2, name: "Outwear", image: outwearImage },
  { id: 3, name: "Tailoring", image: tailoringImage },
  { id: 4, name: "Shirts", image: shirtsImage },
  { id: 5, name: "Shorts", image: shortsImage },
  { id: 6, name: "Trousers", image: trousersImage },
];
const menSecondCategories = [
  { id: 1, name: "Best", image: bestImage },
  { id: 2, name: "New In", image: newInImage },
  { id: 3, name: "Premium", image: premiumImage },
  { id: 4, name: "Plus Size", image: plusSizeImage },
];
const womenFirstCategories = [
  { id: 1, name: "Fjeans", image:  FjeansImage },
  { id: 2, name: "outerwear", image: outerwearImage },
  { id: 3, name: "knitwear", image: knitwearImage },
  { id: 4, name: "Fshirts", image: FshirtsImage },
];
const womenSecondCategories = [
  { id: 1, name: "sit", image: sitImage },
  { id: 2, name: "white", image: whiteImage },
  { id: 3, name: "black", image: blackImage },
  { id: 4, name: "pink", image: pinkImage },
];
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MenPage
              firstCategories={menFirstCategories}
              secondCategories={menSecondCategories}
            />
          }
        />
        <Route
          path="/women"
          element={
            <WomenPage
              firstCategories={womenFirstCategories}
              secondCategories={womenSecondCategories}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
// https://player.vimeo.com/video/1039938832?title=0&muted=1&app_id=122963