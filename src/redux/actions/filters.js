export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
})

export const setCategoryDog = () => ({
    type: 'SET_CATEGORY_DOG',
})

export const setCategoryBird = () => ({
    type: 'SET_CATEGORY_BIRD',
})

export const setSortBy = (sort) => ({
    type: 'SET_SORT_BY',
    payload: sort
})