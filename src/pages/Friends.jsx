import React from 'react';

import arrow from '../assets/img/header/arrow.png';
import lera from '../assets/img/friends/lera.png';
import gerda from '../assets/img/friends/gerda.png';
import lord from '../assets/img/friends/lord.png';
import almaz from '../assets/img/friends/almaz.png';

function Friends() {
    return (
        <section className="friends">
            <div className="categories">
                <div className="sort">
                    <div className="sort__case">
                        <p className="sort__case-text">
                            <img className="sort__case-img sort__case-img--rotate" src={arrow} alt="" />
                            Сортировать по:
                        </p>
                        <span className="sort__case-link">возрасту</span>

                        <div className="sort__list">
                            <ul className="sort__list-items">
                                <li className="sort__list-item sort__list-item--active">возрасту</li>
                                <li className="sort__list-item">цене</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="categories__items">
                    <li className="categories__item">
                        <a className="categories__item-link categories__item-link--active" href="#">Все</a>
                    </li>

                    <li className="categories__item">
                        <a className="categories__item-link" href="#">Собаки</a>
                    </li>

                    <li className="categories__item">
                        <a className="categories__item-link" href="#">Кошки</a>
                    </li>

                    <li className="categories__item">
                        <a className="categories__item-link" href="#">Птицы</a>
                    </li>

                    <li className="categories__item">
                        <a className="categories__item-link" href="#">Рыбы</a>
                    </li>
                </ul>
            </div>

            <div className="animals">
                <div className="animal">
                    <img className="animal__img" src={lera} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={gerda} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={lord} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={almaz} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={lera} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={gerda} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={lord} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>

                <div className="animal">
                    <img className="animal__img" src={almaz} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">Лера</h3>
                        <span className="animal__info-breed">Саванна кошка,</span>
                        <span className="animal__info-age">11 месяцев</span>
                    </div>

                    <div className="animal__price">
                        <button className="animal__price-button">Подружиться</button>
                        <p className="animal__price-value">55 000 ₽</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Friends;