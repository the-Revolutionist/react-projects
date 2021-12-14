import "./Header.css";

import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitch from "../../assets/header/theme-switch.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punk logo" className="punkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img className="searchIcon" alt="search-icon" src={searchIcon} />
        </div>
        <input
          className="searchInput"
          type="search"
          name="header-search"
          id="search"
          placeholder="Collection, Item, or user"
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img className="themeSwitch" src={themeSwitch} alt="themeswitch" />
        </div>
      </div>
      <div className="loginButton">Get in</div>
    </div>
  );
};
