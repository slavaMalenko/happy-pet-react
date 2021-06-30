import React from 'react';

import logo from './assets/img/header/logo.png';
import tel from './assets/img/header/tel.png';
import basket from './assets/img/header/basket.png';
import arrow from './assets/img/header/arrow.png';
import animals from './assets/img/animals.png';
import dog from './assets/img/top/dog.png';
import parrot from './assets/img/top/parrot.png';

function App() {
  return (
    <div>

      <header className="header">
        <div className="container">
          <div className="header__content">
            <a className="logo" href="#">
              <div className="logo__img">
                <img className="logo__img-photo" src={logo} alt="" />
              </div>
              <span className="logo__text">HAPPY PET</span>
            </a>

            <div className="menu">
              <ul className="menu__items">
                <li className="menu__item">
                  <a className="menu__link menu__link--active" href="#">Главная</a>
                </li>

                <li className="menu__item">
                  <a className="menu__link" href="#">Друзья</a>
                </li>

                <li className="menu__item">
                  <a className="menu__link" href="#">О сервисе</a>
                </li>

                <li className="menu__item">
                  <a className="menu__link" href="#">Контакты</a>
                </li>
              </ul>
            </div>

            <a className="tel" href="#">
              <img className="tel__img" src={tel} alt="" />
              <span className="tel__cont">+7 978 884 43-78</span>
            </a>

            <div className="basket">
              <a className="basket__link" href="#">
                <img className=" basket__link-img" src={basket} alt="" />
              </a>

              <a className="basket__list" href="#">
                <span className="basket__list-price">10 000 ₽</span>

                <img className="basket__list-arrow" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="base">
            <img className="intro" src={animals} alt="" />

            <div className="description">
              <h1 className="description__head">Твой новый друг <br /> с доставкой на дом</h1>
              <p className="description__item">Онлайн-магазин породистых домашних животных подарит тебе нового друга в несколько кликов. Действуй!</p>
              <a href="" className="description__button">Посмотреть друзей</a>
            </div>

            <div className="top">
              <h3 className="top__head">Топ месяца:</h3>

              <ul className="top__items">
                <li className="top__item">
                  <a className="top__item-link" href="#">
                    <span className="top__item-head">Собаки</span>
                    <img className="top__item-img top__item-img--center" src={dog} alt="" />
                  </a>
                </li>

                <li className="top__item">
                  <a className="top__item-link" href="#">
                    <span className="top__item-head top__item-head--arrow">Попугаи</span>
                    <img className="top__item-img" src={parrot} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}

export default App;
