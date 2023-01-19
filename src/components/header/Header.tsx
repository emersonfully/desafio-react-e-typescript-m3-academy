import React, { useState } from "react";
import style from "./Header.module.scss";
import logoM3 from "../../assets/imgs/logoM3Academy.png";
import lupa from "../../assets/imgs/lupa.png";
import cart from "../../assets/imgs/cart.png";
import menu from "../../assets/svgs/menu-navbar.svg";
import close from "../../assets/imgs/x-button.png";
import { HeaderNav } from "./HeaderBotton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <button>
            <img src={lupa} alt="" />
          </button>
        </div>
        <div className={style.menu__headerTop}>
          <a className={style.headerTop__login} href="/">
            Entrar
          </a>
          <a href="/">
            <img
              className={style.headerTop__cart}
              src={cart}
              alt="Carrinho de compras"
            />
          </a>
        </div>
        <button
          className={style.button__navbar}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menu} alt="" />
        </button>
        {isOpen && (
          <div className={style.mobileNavBar__container}>
            <div className={style.mobileNavBar__loginWrapper}>
              <a href="/">Entrar</a>
              <button onClick={() => setIsOpen(!isOpen)}>
                {" "}
                <img src={close} alt="" />{" "}
              </button>
            </div>
            <div className={style.mobileNavBar__items}>
              <a href="/">Contatos</a>
              <a href="/">Saiba Mais</a>
              <a href="/">Institucionais</a>
            </div>
          </div>
        )}
      </div>
      <hr />
      <HeaderNav />
    </header>
  );
};
export { Header };
