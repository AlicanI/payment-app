import React, { useState } from "react";
import {
  masterPassByMasterCardLogo,
  unCheckBox,
  checkedBox,
  masterpassLogo,
  visaLogo,
} from "../ImgExporters";

import "./ConditionArea.scss";

const ConditionArea = (props) => {
  const [term1IsClicked, setTerm1IsClicked] = useState(false);
  const [term2IsClicked, setTerm2IsClicked] = useState(false);

  const term1ClickHandler = () => {
    setTerm1IsClicked((prevState) => !prevState);
  };
  const term2ClickHandler = () => {
    setTerm2IsClicked((prevState) => !prevState);
  };

  const checkboxImg1 = term1IsClicked === true ? checkedBox : unCheckBox;
  const checkboxImg2 = term2IsClicked === true ? checkedBox : unCheckBox;

  return (
    <div className="condition-area-container">
      <div className="terms-registration">
        <img
          src={checkboxImg1}
          alt=""
          className="check-box"
          onClick={term1ClickHandler}
        />
        <span className="terms-registration__text">
          Kart bilgierimi{" "}
          <img src={masterPassByMasterCardLogo} className="masterpass-logo" />{" "}
          altyapısında sakalamak istiyorum. <span>Kaydetme Şartlarını</span>{" "}
          okudum onaylıyorum
        </span>
      </div>
      <div className="visa-informing">
        <img src={visaLogo} alt="" />
        <div className="sep-vertical"></div>
        <span className="visa-informing__text">
          <img src={masterpassLogo} alt="" /> Kredi kartı bilgileriniz güvenli
          olarak Masterpass altyapısında saklanmaktadır
        </span>
      </div>
      <div className="distance-selling">
        <img src={checkboxImg2} alt="" onClick={term2ClickHandler} />
        <span className="distance-selling__text">
          Mesafeli satış ve Lorem, ipsum sözleşmesini
        </span>
        <span className="distance-selling__text2"> okudum onaylıyorum</span>
      </div>
    </div>
  );
};

export default ConditionArea;
