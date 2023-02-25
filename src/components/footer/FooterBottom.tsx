import React from "react";
import style from "./Footer.module.scss";
import mastercard from "../../assets/imgs/mastercard.png";
import visa from "../../assets/imgs/visa.png";
import amex from "../../assets/imgs/amex.png";
import elo from "../../assets/imgs/elo.png";
import hyper from "../../assets/imgs/hipercard.png";
import paypal from "../../assets/imgs/paypal.png";
import boleto from "../../assets/imgs/boleto.png";
import vtexPci from "../../assets/imgs/vtexpci.png";
import logoVTEX from "../../assets/imgs/logoVTEX.png";
import logoM3 from "../../assets/imgs/logoM3.png";

const FooterBottom = () => {
  return (
    <div className={style.footer__stamps__wrapper}>
      <span className={style.stamps__address}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </span>
      <ul className={style.stamps__creditCards}>
        <li>
          <img src={mastercard} alt="" />
        </li>
        <li>
          <img src={visa} alt="" />
        </li>
        <li>
          <img src={amex} alt="" />
        </li>
        <li>
          <img src={elo} alt="" />
        </li>
        <li>
          <img src={hyper} alt="" />
        </li>
        <li>
          <img src={paypal} alt="" />
        </li>
        <li>
          <img src={boleto} alt="" />
        </li>
        <span className={style.stamps__divider}></span>
        <li>
          <img className={style.stamps__vtexPci} src={vtexPci} alt="" />
        </li>
      </ul>
      <ul className={style.stamps__developedBy}>
        <li>
          <a
            className={style.developedBy__link}
            href="https://vtex.com/br-pt/"
            target="_blank"
          >
            <span>Powered By</span>
            <img src={logoVTEX} alt="" />
          </a>
        </li>
        <li>
          <a
            className={style.developedBy__link}
            href="https://m3ecommerce.com/"
            target="_blank"
          >
            <span>Developed By</span>
            <img src={logoM3} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { FooterBottom };
