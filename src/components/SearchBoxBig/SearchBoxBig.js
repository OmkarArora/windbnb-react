import "./searchBoxBig.css";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const SearchBoxBig = ({
  setSearchBoxState,
  onInputChange,
  onSearchBtnClick,
  uniquePlaces,
  searchInputValue
}) => {
  return (
    <div className="search-wrapper">
      <div className="searchbox-big">
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
        <div
          className="container-guests"
          onClick={() => {
            let guestContainer = document.querySelector(".container-guests");
            guestContainer.classList.add("active");
            document.querySelector(
              ".search-options-container ul.places"
            ).style.display = "none";
            let locationContainer = document.querySelector(
              ".container-location"
            );
            if (locationContainer.classList.contains("active"))
              locationContainer.classList.remove("active");
          }}
        >
          <p className="heading">GUESTS</p>
          <p className="value-guests">4 guests</p>
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
  );
};

export default SearchBoxBig;
