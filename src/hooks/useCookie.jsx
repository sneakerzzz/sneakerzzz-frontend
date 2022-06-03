// import { useLocation } from "react-router-dom"
import Cookies from "universal-cookie"
import api from "../constans/api"
import { useEffect, useState } from "react"
import axios from "axios"

function useCookie() {

    const cookies = new Cookies()
    const cookie = cookies.get('sessionID')
    const [user, setUser] = useState()

    useEffect(() => {
        axios.post(`${api.url}/api/account/login-session`, {
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                setUser(response.data.data)
            } else {
                setUser()
            }
        })
    }, [cookie])



    return user
}

export default useCookie