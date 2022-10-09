import React from "react";
import "./Footer.scss";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__column">
        <span className="footer__title">Tasker.</span>
        <span className="footer__text">
          Author:{" "}
          <a className="footer__link" href="https://github.com/nickhuynhq" target="_blank" rel="noreferrer">
            @nickhuynhq
          </a>{" "}
        </span>
        <span className="footer__text">Made with love in Toronto, Canada</span>
      </div>
      <div className="footer__column">
        <div className="footer__icons">
          <a href="https://github.com/nickhuynhq" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={Github} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/nickhuynhq/" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={Linkedin} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
