import "./home.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import StaysGrid from "../StaysGrid/StaysGrid";
import StayData from "../data/stays.json";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isSearchOpen, setSearchBoxState] = useState(false);
  const [stayData, setStayData] = useState(StayData);
  const [searchValue, setSearchValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [adultGuestValue, setAdultGuestValue] = useState(0);
  const [childGuestValue, setChildGuestValue] = useState(0);

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

  function onInputChange(value) {
    setSearchValue(value);
  }

  function onSearchBtnClick() {
    if (searchValue === "") {
      let numOfGuests = childGuestValue + adultGuestValue;
      let _stayData = StayData.filter((item) => item.maxGuests >= numOfGuests);
      setStayData(_stayData);
      setSearchBoxState(false);
    } else {
      let _stayData = StayData.filter((item) =>
        `${item.city}, ${item.country}`
          .toUpperCase()
          .includes(searchValue.toUpperCase())
      );
      let numOfGuests = childGuestValue + adultGuestValue;
      _stayData = _stayData.filter((item) => item.maxGuests >= numOfGuests);
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
        onInputChange={onInputChange}
        searchInputValue={searchValue}
        onSearchBtnClick={onSearchBtnClick}
        uniquePlaces={uniquePlaces}
        displayValue={displayValue}
        adultGuestValue={adultGuestValue}
        setAdultGuestValue={setAdultGuestValue}
        childGuestValue={childGuestValue}
        setChildGuestValue={setChildGuestValue}
      />
      <div className="home-content">
        <div className="place-heading">
          Stays in {displayValue === "" ? "Finland" : displayValue}
        </div>
        <StaysGrid StayData={stayData} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
