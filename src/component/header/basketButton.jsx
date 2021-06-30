import React from 'react';

import basket from '../../assets/img/header/basket.png';
import arrow from '../../assets/img/header/arrow.png';

function BasketButton() {
    return (
        <a className="basket" href="#">
            <div className="basket__link">
                <img className=" basket__link-img" src={basket} alt="" />
            </div>

            <div className="basket__list">
                <span className="basket__list-price">10 000 ₽</span>

                <img className="basket__list-arrow" src={arrow} alt="" />
            </div>
        </a>
    )
}

export default BasketButton;