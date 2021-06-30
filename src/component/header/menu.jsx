import React from 'react';

function Menu({ items }) {

    const [menuItem, setMenuItem] = React.useState('home');

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
                            <li className="menu__item">
                                <a className="menu__link" href="#">{item.name}</a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Menu;