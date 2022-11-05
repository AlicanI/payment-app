import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./InformationModal.scss";

const InformationModalContent = () => {
  return (
    <div className="information-area">
      <div className="information-container">
        <div className="information-area__cost">
          <span className="cost-header">Ödeme Tutarı</span>
          <span className="cost-content">40 TL</span>
        </div>
        <div className="information-area__next-button">
          <button className="next-button">Devam Et</button>
        </div>
      </div>
    </div>
  );
};

const InformationModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <InformationModalContent />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default InformationModal;
