import { useState } from "react";
import Logo from "./image/logo.png";
import global from "./icon/global.svg";
import menu from "./icon/menu.svg";
import profile from "./icon/profile.svg";

import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("stays");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStayExperienceTab = (event: string) => {
    setActiveTab(event);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((pre) => !pre);
  };
  return (
    <div>
      <nav className="navpart">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="staysExperience">
          <button
            className={`stays-button ${activeTab === "stays" ? "Active" : ""}`}
            onClick={() => handleStayExperienceTab("stays")}
          >
            Stays
          </button>
          <button
            className={`experience-button ${
              activeTab === "experience" ? "Active" : ""
            }`}
            onClick={() => handleStayExperienceTab("experiences")}
          >
            Experiences
          </button>
        </div>
        <div className="hamburg-nav">
          <div className="home">
            <a href="/airbnb your home"> Airbnb your home </a>
          </div>
          <div className="global">
            <a className="global-a" href="/#">
              <img src={global} alt="Global" />
            </a>
          </div>
        </div>
        <div className="drop-parent">
          <button className="menu drop-show" onClick={toggleDropdown}>
            <img className="img-menu drop-show" src={menu} />
            <img className="img-profile drop-show" src={profile} />
          </button>
          {/* DropDown Content */}
          {isDropdownOpen && (
            <div className="drop-dowoncontent">
              <a className="signup" href="#">
                Sign up
              </a>
              <a href="#">Log in</a>
              <div className="dropdown-line"></div>
              <a href="#">Gift cards</a>
              <a href="#">Airbnb your home</a>
              <a href="#">Host an experience</a>
              <a href="#">Help center</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
