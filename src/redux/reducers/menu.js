const initialState = {
    activeItem: '/'
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU_ACTIVE':
            return {
                activeItem: action.payload
            }

        case 'SET_MENU_ACTIVE_HOME':
            return {
                activeItem: '/'
            }

        case 'SET_MENU_ACTIVE_FRIENDS':
            return {
                activeItem: '/friends'
            }

        default:
            return state;
    }
}

export default menu;