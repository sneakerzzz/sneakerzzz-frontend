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
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "REMOVE_USER":
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default AppReducer;