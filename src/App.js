import React from 'react';

import Header from './component/header/header'

import animals from './assets/img/animals.png';
import dog from './assets/img/top/dog.png';
import parrot from './assets/img/top/parrot.png';

function App() {
  return (
    <div>

      <Header />

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
