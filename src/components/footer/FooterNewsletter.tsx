import React from "react";
import style from "./Footer.module.scss";

const FooterNewsletter = () => {
  return (
    <div className={style.newsletter__container}>
      <div className={style.newsletter__form__wrapper}>
        <h3 className={style.newsletter__container__span}>
          Assine nossa Newsletter
        </h3>
        <input
          className={style.newsletter__input}
          type="text"
          placeholder="E-mail"
        />
        <button className={style.newsletter__submitButton} type="submit">
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export { FooterNewsletter };
