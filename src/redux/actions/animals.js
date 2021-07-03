import axios from 'axios';

export const fetchAnimals = (sortBy, category) => (dispatch) => {
    dispatch(changeIsLoader(true));
    axios
        .get(`http://localhost:3001/friends?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
        .then(({ data }) => {
            dispatch(addAnimals(data));
            dispatch(changeIsLoader(false));
        })
}

export const addAnimals = (animals) => ({
    type: 'ADD_ANIMALS',
    payload: animals,
})

export const changeIsLoader = (boolean) => ({
    type: 'CHANGE_IS_LOADER',
    payload: boolean
})
