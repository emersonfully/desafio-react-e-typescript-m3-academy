import React from "react";
import style from "./Footer.module.scss";
import facebook from "../../assets/imgs/facebook-icon.png";
import instagram from "../../assets/imgs/instagram-icon.png";
import twitter from "../../assets/imgs/twitter-icon.png";
import youtube from "../../assets/imgs/youtube-icon.png";
import linkedin from "../../assets/imgs/linkedin-icon.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const FooterTop = () => {
  return (
    <div className={style.container__about}>
      <div className={style.wrapper__about}>
        <span>Institucional</span>
        <a href="/">Quem somos</a>
        <a href="/">Política de Privacidade</a>
        <a href="/">Segurança</a>
        <a href="/">Seja um Revendedor</a>
      </div>
      <div className={style.wrapper__about}>
        <span>DÚVIDAS</span>
        <a href="/">Entrega</a>
        <a href="/">Pagamento</a>
        <a href="/">Troca e devolução</a>
        <a href="/">Dúvidas frequentes</a>
      </div>
      <div className={style.wrapper__about}>
        <span>Fale conosco</span>
        <span>Atendimento ao consumidor</span>
        <a href="/">(11) 4159-9504</a>
        <span>Atendimento online</span>
        <a href="/">(11) 99433-8825</a>
      </div>

      <Accordion className={style.accordion__container}>
        <AccordionItem>
          <AccordionHeader className={style.accordion__button}>
            <span>Institucional</span>
            <span>+</span>
          </AccordionHeader>

          <AccordionBody>
            <div className={style.accordion__body}>
              <a href="/">Quem Somos</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Política de Privacidade</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Segurança</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Seja um Revendedor</a>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion className={style.accordion__container}>
        <AccordionItem>
          <AccordionHeader className={style.accordion__button}>
            <span>DÚVIDAS</span>
            <span>+</span>
          </AccordionHeader>

          <AccordionBody>
            <div className={style.accordion__body}>
              <a href="/">Entrega</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Pagamento</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Trocas e Devoluções</a>
            </div>
            <div className={style.accordion__body}>
              <a href="/">Dúvidas Frequentes</a>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion className={style.accordion__container}>
        <AccordionItem>
          <AccordionHeader className={style.accordion__button}>
            <span>Fale Conosco</span>
            <span>+</span>
          </AccordionHeader>

          <AccordionBody>
            <div className={style.accordion__body}>
              <span>Atendimento ao Consumidor</span>
            </div>
            <div className={style.accordion__body}>
              <a href="/">(11) 4159 9504</a>
            </div>
            <div className={style.accordion__body}>
              <span>Atendimento Online</span>
            </div>
            <div className={style.accordion__body}>
              <a href="/">(11) 99433-8825</a>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

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
        <a className={style.socialmedia__link} href="/">
          www.loremipsum.com
        </a>
      </div>
    </div>
  );
};

export { FooterTop };
