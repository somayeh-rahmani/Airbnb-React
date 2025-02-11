import { useState } from "react";
import Logo from "/src/asset/image/logo.png";
import global from "/src/asset/icon/global.svg";
import menu from "/src/asset/icon/menu.svg";
import profile from "/src/asset/icon/profile.svg";
import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Homes");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);
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
            className={`stays-button ${activeTab === "Homes" ? "Active" : ""}`}
            onClick={() => setActiveTab("Homes")}
          >
            Homes
          </button>
          <button
            className={`experience-button ${
              activeTab === "Experiences" ? "Active" : ""
            }`}
            onClick={() => setActiveTab("Experiences")}
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
          <button
            className="menu"
            onClick={() => setIsDropdownOpen((item) => !item)}
          >
            <img className="img-menu" src={menu} />
            <img className="img-profile" src={profile} />
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
