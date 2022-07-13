function AppReducer(state, action) {
    switch (action.type) {
        case "SET_COOKIE":
            return {
                ...state,
                cookie: action.payload
            }
        case "REMOVE_COOKIE":
            return {
                ...state,
                cookie: null
            }
        case "ADD_TO_FAVOURITES_LIST":
            return {
                ...state,
                favouritesList: [action.payload, ...state.favouritesList],
            }
        case "REMOVE_FROM_FAVOURITES_LIST":
            return {
                ...state,
                favouritesList: state.favouritesList.filter((product) => product._id !== action.payload),
            }
        default:
            return state
    }
}

export default AppReducer;