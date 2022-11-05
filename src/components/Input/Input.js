import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <form className="card-form">
      <div className="card-holder card-square">
        <label htmlFor="" className="card-holder__name">
          Ad Soyad
        </label>
        <input type="text" className="card-holder__input" />
      </div>
      <div className="card-number card-square">
        <label htmlFor="cart-number">Kart Numarası</label>
        <input
          type="text"
          className="card-number__input"
          placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
        />
      </div>
      <div className="card-details">
        <select
          name="months"
          id="monts"
          className="card-details__input"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            Ay
          </option>
          <option value="jan">01</option>
          <option value="feb">02</option>
          <option value="mar">03</option>
          <option value="apr">04</option>
          <option value="may">05</option>
          <option value="jun">06</option>
          <option value="jul">07</option>
          <option value="aug">08</option>
          <option value="sep">09</option>
          <option value="oct">10</option>
          <option value="nov">11</option>
          <option value="dec">12</option>
        </select>
        <select
          name="years"
          id="years"
          className="card-details__input"
          defaultValue={"DEFAULT"}
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
        />
      </div>
    </form>
  );
};

export default Input;
