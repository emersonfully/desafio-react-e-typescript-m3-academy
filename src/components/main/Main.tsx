import React from "react";
import { CustomForm } from "./Form/CustomForm";
import style from "./Main.module.scss";
import { BreadCrumb } from "./TitleAndBreadCrumb/BreadCrumb";
import { Title } from "./TitleAndBreadCrumb/Title";
const Main = () => {
  return (
    <main className={style.main__wrapper}>
      <BreadCrumb />
      <Title />
      <div className={style.menu__container}>
        <div className={style.menu__wrapper}>
          <ul className={style.menu__items}>
            <li>Sobre</li>
            <li>Forma de Pagamento</li>
            <li>Entrega</li>
            <li>Troca e Devolução</li>
            <li>Seguraça e Privacidade</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className={style.menu__description}>
          <CustomForm />
        </div>
      </div>
    </main>
  );
};

export { Main };
