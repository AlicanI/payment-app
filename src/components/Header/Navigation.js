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
            <a href="">
              <img src={imgPath} />
            </a>
          </li>
          <li>
            <a href="">Cihazlar</a>
          </li>
          <li>
            <a href="">Paketler</a>
          </li>
          <li>
            <a href="">Uygulamalar</a>
          </li>
          <li>
            <a href="">Ev Çözümleri</a>
          </li>
          <li>
            <a href="">Fırsatlar</a>
          </li>
        </ul>
        <span></span>

        <div className="nav-bottom__right">
          <button className="nav-button-letter">
            <span>Hızlı İşlemler</span>
            <span>
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <span className="separation"></span>
          <button className="nav-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="nav-button">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="nav-button">
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
