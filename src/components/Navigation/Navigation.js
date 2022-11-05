import React from "react";
import "./Navigation.scss";
import imgPath from "../../assets/img/logo.png";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <div className="nav-top">
        <span className="small-link">Bireysel</span>
        <span className="small-link">Kurumsal</span>
      </div>
      <div className="nav-bottom">
        <ul className="nav-bottom__left">
          <li>
            <a href="#logo-img">
              <img src={imgPath} alt="brand-logo-mini" />
            </a>
          </li>
          <li>
            <a href="#products">Cihazlar</a>
          </li>
          <li>
            <a href="#packets">Paketler</a>
          </li>
          <li>
            <a href="#applications">Uygulamalar</a>
          </li>
          <li>
            <a href="#home-solutions">Ev Çözümleri</a>
          </li>
          <li>
            <a href="#opportunities">Fırsatlar</a>
          </li>
        </ul>

        <div className="nav-bottom__right">
          <button className="nav-button-letter">
            <span>Hızlı İşlemler</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <span className="separation"></span>
          <button className="nav-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="nav-button">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="nav-button">
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
