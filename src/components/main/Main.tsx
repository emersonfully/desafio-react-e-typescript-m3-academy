import React, { useState } from "react";
import style from "./Main.module.scss";

import { CustomForm } from "./Form/CustomForm";
import { BreadCrumb } from "./TitleAndBreadCrumb/BreadCrumb";
import { Title } from "./TitleAndBreadCrumb/Title";

const GenericText = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <br />
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
    <br />
    <p>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
      vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
      molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
      pariatur?
    </p>
  </>
);

const pages = [
  {
    name: "Sobre",
    child: <GenericText />,
  },
  {
    name: "Forma de Pagamento",
    child: <GenericText />,
  },
  {
    name: "Entrega",
    child: <GenericText />,
  },
  {
    name: "Troca e Devolução",
    child: <GenericText />,
  },
  {
    name: "Seguraça e Privacidade",
    child: <GenericText />,
  },
  {
    name: "Contato",
    child: <CustomForm />,
    subtitle: "Preencha o Formulário",
  },
];

const Main = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <main className={style.main__wrapper}>
      <BreadCrumb />
      <Title />
      <div className={style.menu__container}>
        <div className={style.menu__wrapper}>
          <ul className={style.menu__items}>
            {pages.map((page, index) => {
              return (
                <li
                  key={page.name}
                  className={index === activePage ? style.menu__itemActive : ""}
                  onClick={() => setActivePage(index)}
                >
                  {page.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.menu__description}>
          <h2>{pages[activePage]?.subtitle ?? pages[activePage].name}</h2>
          {pages[activePage].child}
        </div>
      </div>
    </main>
  );
};

export { Main };
