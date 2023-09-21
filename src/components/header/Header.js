import logo from "../../images/Yandex Go Ru black-min.svg";
import ScooterRoundTextShadow from "../../images/Самокат-надпись-отметка на карте-min.png";

import { Route, Link, useHistory } from "react-router-dom";

function Header() {

  return (
    <header className="header">      
      <div className="header_backgr-ellipse"></div>
      <img className="header__logo" src={logo} alt="логотип Яндекс Go" />
      <h1 className="header__title">Вступайте в клуб Самокатов</h1>
      <div>
        <p className="header__text">Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8 месяцев за 
          <span className="header__text_prices"><span className="header__text_new-price">499 ₽</span>          
          <del className="header__text_old-price "> 3190 ₽</del>
          </span>
        </p>
      </div>
      <img className="header__image-scooter-community" src={ScooterRoundTextShadow} alt="Иллюстрация сообщество любителей самокатов" />
      <button className="header__batton header__batton-want">Стать частью клуба</button>
      <div className="header__back-color"></div>
      <div className="header__back-white-grad"></div>
    </header>
  );
}

export default Header;
