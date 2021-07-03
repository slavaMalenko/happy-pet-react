import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Sort from '../component/friends/Sort';
import Categories from '../component/friends/Categories';
import Animals from '../component/friends/Animals';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { addAnimals } from '../redux/actions/animals';



const sort = [
    { name: "возрасту", value: "age" },
    { name: "цене", value: "price" },
]

const categories = [
    { name: "Собаки", category: "dog" },
    { name: "Кошки", category: "cat" },
    { name: "Птицы", category: "bird" },
    { name: "Рыбы", category: "fish" },
]



function Friends() {

    const state = useSelector(({ filters }) => {
        return {
            category: filters.category,
            sortBy: filters.sortBy
        }
    })
    const dispatch = useDispatch();



    const onClickItemCategory = React.useCallback(category => {
        dispatch(setCategory(category))
    }, [])

    const onClickItemSortBy = React.useCallback(sort => {
        dispatch(setSortBy(sort))
    }, [])


    React.useEffect(() => {
        axios
            .get('http://localhost:3001/friends')
            .then(({ data }) => {
                console.log(data)
                dispatch(addAnimals(data))
            })
    }, [])



    return (
        <section className="friends">
            <div className="categories">
                <Sort
                    items={sort}
                    activeItemSort={state.sortBy}
                    onClickItem={onClickItemSortBy}
                />

                <Categories
                    items={categories}
                    activeItemCategories={state.category}
                    onClickItem={onClickItemCategory}
                />
            </div>

            <Animals />
        </section>
    )
}

export default Friends;