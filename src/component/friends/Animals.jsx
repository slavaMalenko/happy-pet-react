import React from 'react';

import lera from '../../assets/img/friends/lera.png';
import gerda from '../../assets/img/friends/gerda.png';
import lord from '../../assets/img/friends/lord.png';
import almaz from '../../assets/img/friends/almaz.png';

function Animals({ items }) {
    return (
        <div className="animals">

            {items &&
                items.map((item, index) => {
                    return (
                        <div className="animal">
                            <img className="animal__img" src={item.imageUrl} alt="фвыфвы" />

                            <div className="animal__info">
                                <h3 className="animal__info-name">{item.name}</h3>
                                <span className="animal__info-breed">{item.kind}, </span>
                                <span className="animal__info-age">{item.age}</span>
                            </div>

                            <div className="animal__price">
                                <button className="animal__price-button">Подружиться</button>
                                <p className="animal__price-value">{item.price} ₽</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Animals;