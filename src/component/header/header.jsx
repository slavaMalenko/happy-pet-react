import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setMenuActive, setMenuActiveHome } from '../../redux/actions/menu';

import Menu from './menu';
import BasketButton from './basketButton';

import logo from '../../assets/img/header/logo.png';
import tel from '../../assets/img/header/tel.png';



const menuItems = [
    { name: 'Главная', link: '/' },
    { name: 'Друзья', link: '/friends' },
    { name: 'О сервисе', link: '/service' },
    { name: 'Контакты', link: '/contacts' },
]




function Header({ totalPrice }) {

    const state = useSelector(({ menu }) => {
        return {
            menuActiveItem: menu.activeItem
        }
    })
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setMenuActive(window.location.pathname))
    }, [])


    const changeActiveItem = (item) => {
        dispatch(setMenuActive(item))
    }
    const changeActiveItemHome = () => {
        dispatch(setMenuActiveHome())
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link
                        className="logo"
                        to='/'
                        onClick={changeActiveItemHome}>

                        <div className="logo__img">
                            <img className="logo__img-photo" src={logo} alt="Логотип" />
                        </div>
                        <span className="logo__text">HAPPY PET</span>

                    </Link>

                    <Menu
                        items={menuItems}
                        activeItem={state.menuActiveItem}
                        changeActiveItem={changeActiveItem} />

                    <a className="tel" href="#">
                        <img className="tel__img" src={tel} alt="Телефон" />
                        <span className="tel__cont">+7 978 884 43-78</span>
                    </a>

                    <BasketButton totalPrice={totalPrice} />
                </div>
            </div>
        </header>
    )
}

export default Header;