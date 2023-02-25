import React from "react";
import style from "./Footer.module.scss";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

const Footer = () => {
  return (
    <footer>
      <FooterNewsletter />
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export { Footer };
