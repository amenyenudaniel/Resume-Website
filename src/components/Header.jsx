import React from "react";
import me from "../../me.jpg";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="header relative" id="personal">
      <div className="header__title ">
        <h1>Daniel Amenyenu</h1>
      </div>

      <div className="personal__info">
        <div className="my__image">
          <img src={me} alt="My picture" />
        </div>

        <div className="personal__first">
          <div className="personal__content">
            <h5>Date Of birth</h5>
            <p>13/12/2004</p>
          </div>
          <div className="personal__content">
            <h5>Email address</h5>
            <p>amenyenudaniel321@gmail.com</p>
          </div>
          <div className="personal__content">
            <h5>Phone Number</h5>
            <p>+233554664707</p>
          </div>
        </div>
        <div className="personal__second">
          <div className="personal__content">
            <h5>Nationality</h5>
            <p>Ghanaian</p>
          </div>
          <div className="personal__content">
            <h5>Address</h5>
            <p>Afari - Kumasi</p>
          </div>
          <div className="personal__content">
            <h5>Web</h5>
            <a
              href="google.com"
              onClick={() => window.open("instagram.com", "_black")}
            >
              DanielAmenyenu.com
            </a>
          </div>
        </div>
      </div>
      <div className="round1 header__round1"></div>
      <div className="round2  header__round2"></div>
    </div>
  );
};

export default Header;
