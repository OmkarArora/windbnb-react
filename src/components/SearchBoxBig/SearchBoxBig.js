import "./searchBoxBig.css";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import NumberInput from "../NumberInput/NumberInput";

const SearchBoxBig = ({
  setSearchBoxState,
  onInputChange,
  onSearchBtnClick,
  uniquePlaces,
  searchInputValue,
  adultGuestValue,
  setAdultGuestValue,
  childGuestValue,
  setChildGuestValue,
}) => {
  return (
    <div className="search-wrapper">
      <div className="searchbox-big">
        <div className="location-wrapper">
        <div
          className="container-location"
          onClick={() => {
            let locationContainer = document.querySelector(
              ".container-location"
            );
            locationContainer.classList.add("active");
            document.querySelector(
              ".search-options-container ul.places"
            ).style.display = "block";
            document.querySelector(
              ".guest-input-container"
            ).style.display = "none";
            let guestContainer = document.querySelector(".container-guests");
            if (guestContainer.classList.contains("active"))
              guestContainer.classList.remove("active");
          }}
        >
          <p className="heading">LOCATION</p>
          <input
            type="text"
            className="input-location"
            placeholder="Stay Place"
            value={searchInputValue}
            onChange={(event) => onInputChange(event.target.value)}
          ></input>
        </div>
        <div className="search-options-container">
        <ul className="places">
          {uniquePlaces.map((item) => (
            <li key={item} onClick={() => onInputChange(item)}>
              <IoLocationSharp className="location icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="guests-wrapper">
      <div
          className="container-guests"
          onClick={() => {
            let guestContainer = document.querySelector(".container-guests");
            guestContainer.classList.add("active");
            document.querySelector(
              ".search-options-container ul.places"
            ).style.display = "none";
            document.querySelector(
              ".guest-input-container"
            ).style.display = "block";
            let locationContainer = document.querySelector(
              ".container-location"
            );
            if (locationContainer.classList.contains("active"))
              locationContainer.classList.remove("active");
          }}
        >
          <p className="heading">GUESTS</p>
          <p className="value-guests">{adultGuestValue+childGuestValue} guests</p>
        </div>
        <div>
          <div className="guest-input-container">
            <div className="subcontainer">
            <p className="guest-heading">Adults</p>
            <p className="guest-subheading">Ages 13 or above</p>
            <NumberInput setValue={setAdultGuestValue} inputValue={adultGuestValue}/>
            </div>
            <div className="subcontainer">
            <p className="guest-heading">Children</p>
            <p className="guest-subheading">Ages 2-12</p>
            <NumberInput setValue={setChildGuestValue} inputValue={childGuestValue}/>
            </div>
            
          </div>

        </div>
      </div>
        <button className="btn-search-big" onClick={onSearchBtnClick}>
          <FaSearch className="icon" />
          Search
        </button>
        <button
          className="btn-searchClose"
          onClick={() => setSearchBoxState(false)}
        >
          <GrClose />
        </button>
      </div>
      
    </div>
  );
};

export default SearchBoxBig;
