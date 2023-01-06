import React from "react";
import style from "./Header.module.scss";
import logoM3 from "../../assets/imgs/logoM3Academy.png";
import cart from "../../assets/imgs/cart.png";
import { HeaderNav } from "./HeaderNav";

const Header = () => {
  return (
    <header>
      <div className={style.header__container}>
        <a href="/">
          <img
            className={style.container__logo}
            src={logoM3}
            alt="Logo M3 Academy"
          />
        </a>
        <div className={style.container__searchbar__wrapper}>
          <input
            className={style.container__searchbar}
            type="text"
            placeholder="Buscar..."
          />
        </div>
        <div className={style.container__cart__wrapper}>
          <a href="/">Entrar</a>
          <a href="/">
            <img
              className={style.cart__wrapper__icon}
              src={cart}
              alt="Carrinho de compras"
            />
          </a>
        </div>
      </div>
      <hr />
      <HeaderNav />
    </header>
  );
};

export { Header };
