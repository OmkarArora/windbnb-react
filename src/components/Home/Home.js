import "./home.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import StaysGrid from "../StaysGrid/StaysGrid";
import StayData from "../data/stays.json";

const Home = () => {
  const [isSearchOpen, setSearchBoxState] = useState(false);
  const [stayData, setStayData] = useState(StayData);
  const [searchValue, setSearchValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    let homeContent = document.querySelector(".home-content");
    if (isSearchOpen) {
      homeContent.classList.add("translucent");
    } else homeContent.classList.remove("translucent");
  }, [isSearchOpen]);

  let uniquePlaces = [];

  // loop through the data and extract unique places
  StayData.forEach((item) => {
    let place = `${item.city}, ${item.country}`;
    if (!uniquePlaces.includes(place)) {
      uniquePlaces.push(place);
    }
  });

  // console.log(uniquePlaces);

  function onInputChange(value) {
    setSearchValue(value);
  }

  function onSearchBtnClick() {
    if (searchValue === "") {
      setStayData(StayData);
      setSearchBoxState(false);
    } else {
      // console.log(searchValue)
      let _stayData = StayData.filter((item) => `${item.city}, ${item.country}`.toUpperCase().includes(searchValue.toUpperCase()));
      setStayData(_stayData);
      setDisplayValue(searchValue);
      setSearchBoxState(false);
    }
  }

  return (
    <div className="home">
      <Header
        isSearchOpen={isSearchOpen}
        setSearchBoxState={setSearchBoxState}
        // onPlaceChange
        onInputChange={onInputChange}
        searchInputValue={searchValue}
        onSearchBtnClick={onSearchBtnClick}
        uniquePlaces={uniquePlaces}
        displayValue={displayValue}
      />
      <div className="home-content">
        <div className="place-heading">Stays in {displayValue===""?"Finland": displayValue}</div>
        <StaysGrid StayData={stayData} />
      </div>
    </div>
  );
};

export default Home;
