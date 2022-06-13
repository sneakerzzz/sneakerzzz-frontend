import { useLocation } from "react-router-dom"
import api from "../constans/api"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { GlobalContext } from "../context/GlobalState"

function useCookie() {

    const { cookie, setUser, user } = useContext(GlobalContext)
    const [userLoading, setUserLoading] = useState(false)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        setUserLoading(false)
        setTrigger(false)
        axios.post(`${api.url}/api/account/login-session`, {
            sessionID: cookie
        }).then(response => {
            setUserLoading(true)
            console.log(response);
            if (response.data.success) {
                setUser(response.data.data)
            } else {
                setUser()
            }
        }).catch(err => {
            setUserLoading(true)
        })
    }, [trigger, cookie])

    return { user, userLoading, cookie, setTrigger }
}

export default useCookie