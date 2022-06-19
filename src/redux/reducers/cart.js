const initialState = {
    totalPrice: 0,
    animalName: null,
    orderCode: null,
    phoneNumber: null
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }

        case 'CLEAR_CART':
            return {
                ...initialState
            }

        case 'SET_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.payload
            }


        case 'SET_ORDER_CODE':
            return {
                ...state,
                orderCode: action.payload
            }

        case 'SET_ANIMAL_NAME':
            return {
                ...state,
                animalName: action.payload
            }

        default:
            return state;
    }
}

export default cart;