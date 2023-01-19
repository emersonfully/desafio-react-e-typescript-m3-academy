import React from "react";
import style from "./Header.module.scss";

const HeaderNav = () => {
  return (
    <nav className={style.header__container__nav}>
      <div className={style.nav__wrapper}>
        <a href="/">Cursos</a>
        <a href="/">Saiba mais</a>
        <a href="/">Institucionais</a>
      </div>
    </nav>
  );
};

export { HeaderNav };
