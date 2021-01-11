import "./searchBoxBig.css";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const SearchBoxBig = ({ setSearchBoxState }) => {
  return (
    <div className="searchbox-big">
      <div
        className="container-location"
        onClick={() => {
          let locationContainer = document.querySelector(".container-location");
          locationContainer.classList.add("active");
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
        ></input>
      </div>
      <div
        className="container-guests"
        onClick={() => {
          let guestContainer = document.querySelector(".container-guests");
          guestContainer.classList.add("active");
          let locationContainer = document.querySelector(".container-location");
          if (locationContainer.classList.contains("active"))
            locationContainer.classList.remove("active");
        }}
      >
        <p className="heading">GUESTS</p>
        <p className="value-guests">4 guests</p>
      </div>
      <button className="btn-search-big">
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
  );
};

export default SearchBoxBig;
