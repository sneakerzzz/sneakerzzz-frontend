import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    cookie: localStorage.getItem('cookie') ? localStorage.getItem('cookie') : null,
    favouritesList: localStorage.getItem('favouritesList') ? JSON.parse(localStorage.getItem('favouritesList')) : [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        console.log(state.cookies);
        localStorage.setItem('cookie', state.cookie)
        localStorage.setItem('favouritesList', JSON.stringify(state.favouritesList))
    }, [state])

    const setCookie = (cookie) => {
        console.log(cookie);
        dispatch({ type: "SET_COOKIE", payload: cookie })
    }

    const removeCookie = (cookie) => {
        console.log(cookie);
        dispatch({ type: "REMOVE_COOKIE", payload: cookie })
    }

    const addToFavouritesList = (product) => {
        dispatch({ type: "ADD_TO_FAVOURITES_LIST", payload: product })
    }

    const removeFromFavouritesList = (card_code) => {
        dispatch({ type: "REMOVE_FROM_FAVOURITES_LIST", payload: card_code })
    }


    return (
        <GlobalContext.Provider value={{ cookie: state.cookie, setCookie, removeCookie, favouritesList: state.favouritesList, addToFavouritesList, removeFromFavouritesList }} >
            {props.children}
        </GlobalContext.Provider>
    )

}