import React from 'react';

function Animals({ items, changeCartPrice }) {
    return (
        <div className="animals">

            {items &&
                items.map((item, index) => {
                    return (
                        <div className="animal">
                            <div className="animal-bcg">
                                <img className="animal__img" src={item.imageUrl} alt="" />

                                <div className="animal__info">
                                    <h3 className="animal__info-name">{item.name}</h3>
                                    <p className="animal__info-description">{item.description}</p>
                                </div>

                                <div className="animal__bottom">
                                    <span className="animal__bottom-breed">{item.kind}, </span>
                                    <span className="animal__bottom-age">{item.age} {item.ageValue}</span>
                                    <div className="animal__price">
                                        <button
                                            className="animal__price-button"
                                            onClick={() => changeCartPrice(item.price)}
                                        >
                                            Подружиться
                                        </button>
                                        <p className="animal__price-value">{item.price} ₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Animals;