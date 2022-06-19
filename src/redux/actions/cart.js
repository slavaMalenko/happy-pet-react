export const addTotalPrice = (value) => ({
    type: 'ADD_TOTAL_PRICE',
    payload: value
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const setOrderCode = (value) => ({
    type: 'SET_ORDER_CODE',
    payload: value
})

export const setAnimalName = (value) => ({
    type: 'SET_ANIMAL_NAME',
    payload: value
})

export const setPhoneNumber = (value) => ({
    type: 'SET_PHONE_NUMBER',
    payload: value
})