import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCube,
  faHouse,
  faPercent,
  faQuestion,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/images/profile-pic.png";
import logo from "../../assets/images/shoes-icon.png";
function Nav() {
  return (
    <div className="nav">
      <div className="nav-links-container ">
        <div className="heading-container">
           <img className="logo" src={logo} alt=""/>
          <h3 className="current-page-heading">ShoeHeads</h3>
        </div>
        <div className="nav-link-container active-nav-link">
          <div>
          <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </div>
        </div>
        <div className="nav-link-container">
          <div>
            <FontAwesomeIcon icon={faCube} />
            <span>Products</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="nav-link-container">
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span>Customers</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="nav-link-container">
          <div>
            <FontAwesomeIcon icon={faWallet} />
            <span>Wallet</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="nav-link-container">
          <div>
            <FontAwesomeIcon icon={faPercent} />
            <span>Coupon</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="nav-link-container">
          <div>
            <FontAwesomeIcon icon={faQuestion} />
            <span>Help</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="profile-container active-nav-link">
        <div className="profile-info">
          <img src={profilePic} alt="" width={35} height={35} />
          <div>
            <div className="username">Yash</div>
            <div className="position">Prime user</div> 
          </div>
        </div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default Nav;
