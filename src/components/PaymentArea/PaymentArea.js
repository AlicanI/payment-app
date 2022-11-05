import { useState } from "react";
import { SelectionArea, CreditCard } from "../Exporter";
import { backArrow, cardIcon, paycellLogo } from "../ImgExporters";

import "./PaymentArea.scss";

const PaymentArea = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredCvv, setEnteredCvv] = useState("");
  const [cvvIsClicked, setCvvIsClicked] = useState(false);

  const nameChangeHandler = (event) => {
    const str = event.target.value.trim();
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    setEnteredName(str2);
  };

  const numberChangeHandler = (event) => {
    let spacedNumber = validationNumberInput(event, 16);

    setEnteredNumber(spacedNumber);
  };

  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const cvvChangeHandler = (event) => {
    let cvvNumber = validationNumberInput(event, 3);
    setEnteredCvv(cvvNumber);
  };

  const cvvBackSide = (event) => {
    setCvvIsClicked(true);
  };
  const cvvFrontSide = () => {
    setCvvIsClicked(false);
  };

  const userData = {
    name: enteredName,
    number: enteredNumber,
    month: enteredMonth,
    year: enteredYear,
    cvv: enteredCvv,
  };

  const onlyNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const validationNumberInput = (event, numOfDig) => {
    const num = event.target.value.replace(/ /g, "");
    let onlyNum = num.replace(/\D/g, "");

    if (onlyNum.length > numOfDig) {
      onlyNum = onlyNum.substr(0, numOfDig);
    }

    let spacedNumber = "";
    if (onlyNum.match(/.{1,4}/g)) {
      spacedNumber = onlyNum.match(/.{1,4}/g).join(" ");
    }

    return spacedNumber;
  };

  return (
    <div className="container-payment">
      <div className="container-payment_info-area">
        <a href="sadasds" className="container-payment__payment-info-link">
          <img src={backArrow} alt="dsad" className="back-arrow" />
          <h3 className="payment-informations">Ödeme Bilgileri</h3>
        </a>
        <SelectionArea />
        <div className="container-payment__payment-input-area">
          <div className="container-payment__credit-card-info">
            <span className="credit-card-bank-card">
              <img src={cardIcon} alt="" /> Kredi Kartı / Banka Kartı
            </span>

            <div className="card-form">
              <div className="card-holder card-square">
                <label htmlFor="" className="card-holder__name">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  className="card-holder__input"
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="card-number card-square">
                <label htmlFor="cart-number">Kart Numarası</label>
                <input
                  type="text"
                  className="card-number__input"
                  placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
                  onChange={numberChangeHandler}
                  maxLength="19"
                  onKeyPress={onlyNumber}
                  value={enteredNumber}
                />
              </div>
              <div className="card-details">
                <select
                  name="months"
                  id="monts"
                  className="card-details__input"
                  defaultValue={"DEFAULT"}
                  onChange={monthChangeHandler}
                >
                  <option value="DEFAULT" disabled hidden>
                    Ay
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name="years"
                  id="years"
                  className="card-details__input"
                  defaultValue={"DEFAULT"}
                  onChange={yearChangeHandler}
                >
                  <option value="DEFAULT" disabled hidden>
                    Yıl
                  </option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>

                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  className="card-details__input"
                  onChange={cvvChangeHandler}
                  onFocus={cvvBackSide}
                  onBlur={cvvFrontSide}
                  onKeyPress={onlyNumber}
                  value={enteredCvv}
                />
              </div>
            </div>
          </div>
          <div className="container-payment__credit-card-picture">
            <span className="my-payment-cards">
              <img src={paycellLogo} alt="" /> Paycell Kartlarım
            </span>
            <div className="card-flipping-container">
              <CreditCard onUserData={userData} onCvvClicked={cvvIsClicked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentArea;
