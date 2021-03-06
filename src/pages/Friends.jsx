import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sort from '../component/friends/Sort';
import Categories from '../component/friends/Categories';
import Animals from '../component/friends/Animals';
import AnimalLoader from '../component/friends/AnimalLoader';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchAnimals } from '../redux/actions/animals';
import { setAnimalName, addTotalPrice } from '../redux/actions/cart';



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

    const state = useSelector(({ filters, animals, cart }) => {
        return {
            category: filters.category,
            sortBy: filters.sortBy,
            animals: animals.items,
            isLoader: animals.isLoader,
            totalPrice: cart.totalPrice
        }
    })
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAnimals(state.sortBy, state.category))
    }, [state.sortBy, state.category])


    const onClickItemCategory = React.useCallback(category => {
        dispatch(setCategory(category))
    }, [])
    const onClickItemSortBy = React.useCallback(sort => {
        dispatch(setSortBy(sort))
    }, [])
    const changeCartPriceAndAnimalName = (price, name) => {
        if (state.totalPrice === 0) {
            dispatch(addTotalPrice(price))
            dispatch(setAnimalName(name))
        }
    }


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
            {
                state.isLoader
                    ? Array(4).fill(0).map((item, index) => <AnimalLoader key={index} />)
                    : <Animals
                        items={state.animals}
                        changeCartPriceAndAnimalName={changeCartPriceAndAnimalName}
                    />
            }
        </section>
    )
}

export default Friends;