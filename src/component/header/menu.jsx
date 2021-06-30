import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Menu({ items }) {

    const [menuItem, setMenuItem] = React.useState(window.location.pathname);

    const changeMenuItem = (item) => {
        setMenuItem(item)
    }

    return (
        <div className="menu">
            <ul className="menu__items">

                {
                    items &&
                    items.map((item, index) => {
                        return (
                            <li
                                key={`${item}_${index}`}
                                className="menu__item">

                                <Link
                                    onClick={() => changeMenuItem(item.link)}
                                    to={item.link}
                                    className={classNames(
                                        'menu__link',
                                        { 'menu__link--active': item.link === menuItem },
                                    )}>

                                    {item.name}

                                </Link>

                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}

export default Menu;