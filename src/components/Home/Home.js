import "./home.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import StaysGrid from "../StaysGrid/StaysGrid";

const Home = () => {
  const [isSearchOpen, setSearchBoxState] = useState(false);

  useEffect(() => {
    let homeContent = document.querySelector(".home-content");
    if (isSearchOpen) {
      homeContent.classList.add("translucent");
    } else homeContent.classList.remove("translucent");
  }, [isSearchOpen]);

  return (
    <div className="home">
      <Header
        isSearchOpen={isSearchOpen}
        setSearchBoxState={setSearchBoxState}
      />
      <div className="home-content">
        <div className="place-heading">Stays in Finland</div>
        <StaysGrid />
      </div>
    </div>
  );
};

export default Home;
