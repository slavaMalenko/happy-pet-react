import React from 'react';

import Menu from './menu';

import logo from '../../assets/img/header/logo.png';
import tel from '../../assets/img/header/tel.png';
import BasketButton from './basketButton';



const menuItems = [
    'Главная',
    'Друзья',
    'О сервисе',
    'Контакты'
]

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a className="logo" href="#">
                        <div className="logo__img">
                            <img className="logo__img-photo" src={logo} alt="" />
                        </div>
                        <span className="logo__text">HAPPY PET</span>
                    </a>

                    <Menu items={menuItems} />

                    <a className="tel" href="#">
                        <img className="tel__img" src={tel} alt="" />
                        <span className="tel__cont">+7 978 884 43-78</span>
                    </a>

                    <BasketButton />
                </div>
            </div>
        </header>
    )
}

export default Header;