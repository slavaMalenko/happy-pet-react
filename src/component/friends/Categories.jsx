import React from 'react';

function Categories() {
    return (
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
    )
}

export default Categories;