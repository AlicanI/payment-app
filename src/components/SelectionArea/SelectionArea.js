import React, { Fragment, useState } from "react";

import { radioClicked, radioUnclicked } from "../ImgExporters";

import "./SelectionArea.scss";

const SelectionArea = () => {
  const [packetIsClicked, setPacketIsClicked] = useState(false);
  const [tlIsClicked, setTlIsClicked] = useState(true);

  const packetClickHandler = () => {
    setPacketIsClicked(true);
    setTlIsClicked(false);
  };
  const tlClickHandler = () => {
    setTlIsClicked(true);
    setPacketIsClicked(false);
  };

  const packetClasses =
    packetIsClicked === true
      ? "container-payment__square-clicked"
      : "container-payment__square";

  const tlClasses =
    tlIsClicked === true
      ? "container-payment__square-clicked"
      : "container-payment__square";

  return (
    <Fragment>
      <div className="container-payment_click-area">
        <div className={packetClasses} onClick={packetClickHandler}>
          <img
            src={packetIsClicked === true ? radioClicked : radioUnclicked}
            className="radio"
          />
          <span>Paket Yükle</span>
        </div>
        <div className={tlClasses} onClick={tlClickHandler}>
          <img
            src={tlIsClicked === true ? radioClicked : radioUnclicked}
            className="radio"
          />
          <span>Tl Yükle</span>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectionArea;
