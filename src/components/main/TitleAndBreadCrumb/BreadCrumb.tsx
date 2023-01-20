import React from "react";
import Home from "../../../assets/svgs/homebutton.svg";
import ArromRight from "../../../assets/svgs/arrowright.svg";
import style from "./TitleAndBreadGrumb.module.scss";

const BreadCrumb = () => {
  return (
    <nav className={style.breadgrumb__wrapper}>
      <ul className={style.breadgrumb__ul}>
        <li>
          <a href="/">
            <img className={style.homeButton} src={Home} alt="" />
          </a>
        </li>
        <li>
          <img className={style.arrowRight} src={ArromRight} alt="" />
        </li>
        <li>
          <a href="/">Institucional</a>
        </li>
      </ul>
    </nav>
  );
};

export { BreadCrumb };
