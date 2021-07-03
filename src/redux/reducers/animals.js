const initialState = {
    items: null,
    isLoader: false
}

const animals = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ANIMALS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default animals;