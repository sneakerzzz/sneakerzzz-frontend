import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    cookie: localStorage.getItem('cookie') ? localStorage.getItem('cookie') : null,
    user: localStorage.getItem('user') ? localStorage.getItem('user') : null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        console.log(state.cookies);
        localStorage.setItem('cookie', state.cookie)
        localStorage.setItem('user', state.user)
    }, [state])

    const setCookie = (cookie) => {
        console.log(cookie);
        dispatch({ type: "SET_COOKIE", payload: cookie })
    }

    const removeCookie = (cookie) => {
        console.log(cookie);
        dispatch({ type: "REMOVE_COOKIE", payload: cookie })
    }

    const setUser = (user) => {
        console.log(user);
        dispatch({ type: "SET_USER", payload: user })
    }

    const removeUser = (user) => {
        console.log(user);
        dispatch({ type: "REMOVE_USER", payload: user })
    }

    return (
        <GlobalContext.Provider value={{ cookie: state.cookie, user: state.user, setCookie, removeCookie, setUser, removeUser }} >
            {props.children}
        </GlobalContext.Provider>
    )

}