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
      <a href="https://web.whatsapp.com/" target="_blank">
        <img src={whatsapp} alt="Logo do Whatsapp" />
      </a>
      <button onClick={scrollToTop}>
        <img src={arrow} alt="Botão de voltar ao topo" />
      </button>
    </div>
  );
}

export default BackToTopButton;
