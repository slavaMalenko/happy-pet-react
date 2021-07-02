import React from 'react';
import classNames from 'classnames';

const Categories = React.memo(({ items, activeItemCategories, onClickItem }) => {
    return (
        <ul className="categories__items">
            <li className="categories__item">
                <p className={classNames(
                    'categories__item-link',
                    { 'categories__item-link--active': activeItemCategories === null }
                )}
                    onClick={() => onClickItem(null)}>

                    Все

                </p>
            </li>

            {items &&
                items.map((item, index) => {
                    return (
                        <li key={index} className="categories__item">
                            <p className={classNames(
                                'categories__item-link',
                                { 'categories__item-link--active': activeItemCategories === item.category }
                            )}
                                onClick={() => onClickItem(item.category)}>

                                {item.name}

                            </p>
                        </li>
                    )
                })
            }
        </ul >
    )
})

export default Categories;