import React, { useState, useEffect } from "react";
import whatsapp from "../../assets/imgs/whatsapp.png";
import arrow from "../../assets/svgs/arrowTop.svg";
import style from "./BackToTopButton.module.scss";

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.button__container}>
      <a href="https://web.whatsapp.com/">
        <img src={whatsapp} alt="" />
      </a>
      <button onClick={scrollToTop}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default BackToTopButton;
