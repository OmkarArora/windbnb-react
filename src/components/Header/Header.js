import "./header.css";
import Logo from "../images/logo.svg";
import { FaSearch } from "react-icons/fa";
import SearchBoxBig from "../SearchBoxBig/SearchBoxBig";

const Header = ({
  isSearchOpen,
  setSearchBoxState,
  onInputChange,
  onSearchBtnClick,
  uniquePlaces,
  searchInputValue,
  displayValue,
  adultGuestValue,
  setAdultGuestValue,
  childGuestValue,
  setChildGuestValue,
}) => {
  return (
    <>
      {isSearchOpen ? (
        <SearchBoxBig
          setSearchBoxState={setSearchBoxState}
          onInputChange={onInputChange}
          onSearchBtnClick={onSearchBtnClick}
          uniquePlaces={uniquePlaces}
          searchInputValue={searchInputValue}
          adultGuestValue={adultGuestValue}
          setAdultGuestValue={setAdultGuestValue}
          childGuestValue={childGuestValue}
          setChildGuestValue={setChildGuestValue}
        />
      ) : (
        <header className="header">
          <img src={Logo} alt="logo" className="header-logo" />
          <div className="searchbar" onClick={() => setSearchBoxState(true)}>
            <div className="place">
              {displayValue === "" ? "Finland" : searchInputValue}
            </div>

            {adultGuestValue + childGuestValue === 0 ? (
              <div className="guest">Add guests</div>
            ) : (
              <div className="guest active">{adultGuestValue + childGuestValue} guests</div>
            )}
            <div className="container-searchIcon">
              <FaSearch className="icon" />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
