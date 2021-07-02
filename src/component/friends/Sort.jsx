import React from 'react';

import arrow from '../../assets/img/header/arrow.png';

function Sort() {
    return (
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
    )
}

export default Sort;