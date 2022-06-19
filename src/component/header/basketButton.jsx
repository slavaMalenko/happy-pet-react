import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import basket from '../../assets/img/header/basket.png';
import arrow from '../../assets/img/header/arrow.png';
import { setOrderCode, clearCart, setPhoneNumber } from '../../redux/actions/cart';

function BasketButton({ totalPrice }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const changeVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }
    const initialVisiblePopup = () => {
        setVisiblePopup(false);
    }

    const state = useSelector(({ cart }) => {
        return {
            totalPrice: cart.totalPrice,
            animalName: cart.animalName,
            orderCode: cart.orderCode,
            phoneNumber: cart.phoneNumber
        }
    })
    const dispatch = useDispatch();

    const clearAllCart = () => {
        if (state.totalPrice !== 0) {
            console.log(`Корзина была наполнена на ${state.totalPrice} рублей`)
            dispatch(clearCart())
        }
        initialVisiblePopup()
    }

    const getOrderNumber = () => {
        if (state.orderCode === null && state.phoneNumber) {
            const getRandomNumber = () => Math.random().toString(36).substr(2, 1);
            const randomArray = [
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
            ];
            dispatch(setOrderCode(randomArray.join('')))
        }
    }

    const handleChange = event => {
        dispatch(setPhoneNumber(event.target.value))
    }

    return (
        <a className="basket" href="#">
            <div className="basket__link">
                <img className=" basket__link-img" src={basket} alt="Корзина" onClick={changeVisiblePopup} />
            </div>

            <div className="basket__list">
                <span className="basket__list-price" onClick={changeVisiblePopup}>{totalPrice} ₽</span>

                <div className="basket__list-cart">
                    {visiblePopup &&
                        <div className="basket__list-cart-info">
                            <div className="basket__list-cart-phone">
                                {(!state.orderCode && state.totalPrice) ? <input type="text" value={state.phoneNumber} className="basket__list-cart-input" onChange={handleChange} /> : null}
                            </div>

                            <div className="basket__list-buttons-items">
                                <button
                                    className={classNames(
                                        "basket__list-button-item",
                                        { "basket__list-button-item--disabled": !state.animalName || (state.orderCode && state.animalName && state.phoneNumber) }
                                    )}
                                    onClick={getOrderNumber} disabled={!state.animalName && !state.phoneNumber}>
                                    {(state.orderCode && state.animalName && state.phoneNumber) ? 'Заказ принят!' : 'Заказать'}
                                </button>

                                <button
                                    className={classNames(
                                        "basket__list-button-item",
                                        "basket__list-button-item--white",
                                        { "basket__list-button-item--white-disabled": !state.animalName || (state.orderCode && state.animalName) }
                                    )}
                                    onClick={clearAllCart}
                                    disabled={!state.totalPrice}>
                                    Очистить корзину
                                </button>
                            </div>

                            {state.orderCode && state.animalName && state.phoneNumber && <div className="basket__list-cart-code">Код вашего заказа: <span className="basket__list-cart-code--border">{state.orderCode}</span></div>}
                            {state.animalName && state.orderCode && state.phoneNumber && <div className="basket__list-cart-name">{state.animalName} уже в пути!</div>}
                        </div>

                    }
                </div>

                <img
                    className={classNames(
                        "basket__list-arrow",
                        { "basket__list-arrow--rotate": visiblePopup }
                    )}
                    src={arrow} alt="" />
            </div>
        </a>
    )
}

export default BasketButton;