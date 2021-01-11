import "./header.css";
import Logo from "../images/logo.svg";
import { FaSearch } from "react-icons/fa";
import SearchBoxBig from "../SearchBoxBig/SearchBoxBig";

const Header = ({isSearchOpen, setSearchBoxState}) => {
    return (
        <>
        {isSearchOpen?<SearchBoxBig setSearchBoxState={setSearchBoxState}/>: <header className="header">
            <img src={Logo} alt="logo" className="header-logo"/>
            <div className="searchbar"  onClick={() => setSearchBoxState(true)}>
                <div className="place">Helsinki, Finland</div>
                <div className="guest">Add guests</div>
                <div className="container-searchIcon"><FaSearch className="icon"/></div>
                
            </div>
        </header>}
        
        
        </>
    )
}

export default Header;