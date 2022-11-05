import { yapıKrediLogo, masterPassByMasterCardLogo } from "../ImgExporters";

import "./CreditCard.scss";

const CreditCard = (props) => {
  const cvvClicked = props.onCvvClicked;
  const cardClasses = !cvvClicked ? "card" : "card flipping";

  return (
    <div className={cardClasses}>
      <BackSide onUserData={props.onUserData} />
      <FrontSide onUserData={props.onUserData} />
    </div>
  );
};

const FrontSide = (props) => {
  const { name, number, month, year } = props.onUserData;

  const bankDetected = number.length >= 4;
  const cardClasses = bankDetected
    ? "credit-card yapikredi-background"
    : "credit-card";
  return (
    <div className={cardClasses}>
      <div className="credit-card__left">
        <div className="credit-card__card-holder-name">
          <span className="header">Card Holder</span>
          <span className="name">{name}</span>
        </div>
        <div className="credit-card__card-holder-number">
          <span className="header">Card Number</span>
          <span className="number">
            {number.length === 0 ? "XXXX XXXX XXXX XXXX" : number}
          </span>
        </div>
        <div className="credit-card__card-expriation">
          <span className="header">Expriation</span>
          <span className="date">
            {month.length === 0 ? "MM" : month} /{" "}
            {year.length === 0 ? "YY" : year}
          </span>
        </div>
      </div>
      {bankDetected && (
        <div className="credit-card__right">
          <span className="bank-logo">
            <img src={yapıKrediLogo} alt="" />
          </span>
          <span className="mastercard-logo">
            <img src={masterPassByMasterCardLogo} alt="" />
          </span>
        </div>
      )}
    </div>
  );
};

const BackSide = (props) => {
  const { cvv, number } = props.onUserData;
  const bankDetected = number.length >= 4;
  const cardClasses = bankDetected
    ? "credit-card-backside yapikredi-background"
    : "credit-card-backside";
  return (
    <div className={cardClasses}>
      <div className="credit-card-backside__top">
        <div className="bold-line"></div>
      </div>

      <div className="credit-card-backside__bottom">
        <div className="bold-rectangle"></div>
        <div className="cvv-input">{cvv.length === 0 ? "CVV" : cvv}</div>
      </div>
    </div>
  );
};

export default CreditCard;
