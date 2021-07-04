const initialState = {
    totalPrice: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOTAL_PTICE':
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }

        default:
            return state;
    }
}

export default cart;