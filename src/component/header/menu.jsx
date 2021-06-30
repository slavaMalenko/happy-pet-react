import React from 'react';

function Menu({ items }) {
    return (
        <div className="menu">
            <ul className="menu__items">

                {
                    items &&
                    items.map((item, index) => {
                        return (
                            <li className="menu__item">
                                <a className="menu__link" href="#">{item}</a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Menu;