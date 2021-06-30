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
      <header class="header">
        <div class="container">
          <div class="header__content">
            <a class="logo" href="#">
              <div class="logo__img">
                <img class="logo__img-photo" src={logo} alt="" />
              </div>
              <span class="logo__text">HAPPY PET</span>
            </a>

            <div class="menu">
              <ul class="menu__items">
                <li class="menu__item">
                  <a class="menu__link menu__link--active" href="#">Главная</a>
                </li>

                <li class="menu__item">
                  <a class="menu__link" href="#">Друзья</a>
                </li>

                <li class="menu__item">
                  <a class="menu__link" href="#">О сервисе</a>
                </li>

                <li class="menu__item">
                  <a class="menu__link" href="#">Контакты</a>
                </li>
              </ul>
            </div>

            <a class="tel" href="#">
              <img class="tel__img" src={tel} alt="" />
              <span class="tel__cont">+7 978 884 43-78</span>
            </a>

            <div class="basket">
              <a class="basket__link" href="#">
                <img class=" basket__link-img" src={basket} alt="" />
              </a>

              <a class="basket__list" href="#">
                <span class="basket__list-price">10 000 ₽</span>

                <img class="basket__list-arrow" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main class="main">
        <div class="container">
          <section class="base">
            <img class="intro" src={animals} alt="" />

            <div class="description">
              <h1 class="description__head">Твой новый друг <br /> с доставкой на дом</h1>
              <p class="description__item">Онлайн-магазин породистых домашних животных подарит тебе нового друга в
                несколько
                кликов. Действуй!</p>
              <a href="" class="description__button">Посмотреть друзей</a>
            </div>

            <div class="top">
              <h3 class="top__head">Топ месяца:</h3>

              <ul class="top__items">
                <li class="top__item">
                  <a class="top__item-link" href="#">
                    <span class="top__item-head">Собаки</span>
                    <img class="top__item-img top__item-img--center" src={dog} alt="" />
                  </a>
                </li>

                <li class="top__item">
                  <a class="top__item-link" href="#">
                    <span class="top__item-head top__item-head--arrow">Попугаи</span>
                    <img class="top__item-img" src={parrot} alt="" />
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
