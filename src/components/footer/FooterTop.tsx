import React from "react";
import style from "./Footer.module.scss";
import facebook from "../../assets/imgs/facebook-icon.png";
import instagram from "../../assets/imgs/instagram-icon.png";
import twitter from "../../assets/imgs/twitter-icon.png";
import youtube from "../../assets/imgs/youtube-icon.png";
import linkedin from "../../assets/imgs/linkedin-icon.png";

const FooterTop = () => {
  return (
    <div className={style.container__about}>
      <div className={style.wrapper__institucional}>
        <span>Institucional</span>
        <a href="/">Quem somos</a>
        <a href="/">Política de Privacidade</a>
        <a href="/">Segurança</a>
        <a href="/">Seja um Revendedor</a>
      </div>
      <div className={style.wrapper__duvidas}>
        <span>DÚVIDAS</span>
        <a href="/">Entrega</a>
        <a href="/">Pagamento</a>
        <a href="/">Troca e devolução</a>
        <a href="/">Dúvidas frequentes</a>
      </div>
      <div className={style.wrapper__contato}>
        <span>Fale conosco</span>
        <p>Atendimento ao consumidor</p>
        <a href="/">(11) 4159-9504</a>
        <p>Atendimento online</p>
        <a href="/">(11) 99433-8825</a>
      </div>
      <div className={style.wrapper__socialmedia}>
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="Logo do Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="Logo do Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="Logo do Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <img src={youtube} alt="Logo do Youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.linkein.com">
              <img src={linkedin} alt="Logo do LinkedIn" />
            </a>
          </li>
        </ul>
        <a href="/">www.loremipsum.com</a>
      </div>
    </div>
  );
};

export { FooterTop };
