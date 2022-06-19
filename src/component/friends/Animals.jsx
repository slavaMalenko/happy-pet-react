import React from 'react';




function Animals({ items, changeCartPriceAndAnimalName }) {
    return (
        <div className="animals">

            {items &&
                items.map((item, index) => {
                    return (
                        <div key={`${item}_${index}`} className="animal">
                            <div className="animal-bcg">
                                <img className="animal__img" src={item.imageUrl} alt="" />

                                <div className="animal__info">
                                    <h3 className="animal__info-name">{item.name}</h3>
                                    <p className="animal__info-description">"{item.description}"</p>
                                </div>

                                <div className="animal__bottom">
                                    <p className="animal__bottom-desc">
                                        <span className="animal__bottom-value">Порода: </span>
                                        <span className="animal__bottom-kind">{item.kind} </span>
                                    </p>

                                    <p className="animal__bottom-desc">
                                        <span className="animal__bottom-value">Возраст: </span>
                                        {item.age} {item.ageValue}
                                    </p>

                                    <div className="animal__price">
                                        <button
                                            className="animal__price-button"
                                            onClick={() => changeCartPriceAndAnimalName(item.price, item.name)}>

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