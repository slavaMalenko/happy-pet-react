import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sort from '../component/friends/Sort';
import Categories from '../component/friends/Categories';
import Animals from '../component/friends/Animals';

import { setCategory } from '../redux/actions/filters';

const categories = [
    { name: "Собаки", category: "dog" },
    { name: "Кошки", category: "cat" },
    { name: "Птицы", category: "bird" },
    { name: "Рыбы", category: "fish" },
]

function Friends() {

    const state = useSelector(({ filters }) => {
        return {
            category: filters.category
        }
    })

    const dispatch = useDispatch();

    const onClickItem = React.useCallback(category => {
        dispatch(setCategory(category))
    }, [])



    return (
        <section className="friends">
            <div className="categories">
                <Sort />

                <Categories
                    items={categories}
                    activeItemCategories={state.category}
                    onClickItem={onClickItem}
                />
            </div>

            <Animals />
        </section>
    )
}

export default Friends;