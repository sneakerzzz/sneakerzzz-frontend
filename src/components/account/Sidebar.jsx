import { NavLink } from "react-router-dom"
import { useLanguage, useCookie } from "../../hooks"
import { useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { useNavigate } from "react-router-dom"
import images from "../../constans/images"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"

function Sidebar({ user, cookie }) {
    const language = useLanguage({ user })
    const [requestResult, setRequestResult] = useState({})
    console.log(requestResult);

    const {removeCookie, removeUser} = useContext(GlobalContext)

    const history = useNavigate()

    const links = [
        {
            title: language.account.settings.title,
            link: '/account',
            img: images.settings
        },
        {
            title: language.account.payment.title,
            link: '/account/payment',
            img: images.payment
        }
    ]

    function deleteSessionRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.url}/api/account/delete-session?lang=${language.lang}`, {
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Session was deleted successfully') {
                    setRequestResult({ message: language.notification.successfulLogin, success: true })
                }
                removeUser(user)
                removeCookie(cookie)
                history('/login')
            } else {
                if (response.data.message === 'Error') {
                    setRequestResult({ message: language.notification.error, success: false })
                }
                if (response.data.message === 'Missing fields') {
                    setRequestResult({ message: language.notification.missingFields, success: false })
                }
            }
        }).catch(error => {
            setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
        })
    }

    return (
        <aside className="aside__settings">
            <div className="aside__inner">
                <div className="aside__settings-nav">
                    {
                        links.map((link, key) => (
                            <NavLink key={key} end to={link.link} className={({ isActive }) => {
                                if (isActive) {
                                    return 'active aside__settings-link'
                                } else {
                                    return 'aside__settings-link'
                                }
                            }}>
                                <div className="aside__settings-link_img">
                                    {link.img}
                                </div>
                                <div className="aside__settings-link_title">
                                    <h1>{link.title}</h1>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <div onClick={(e) => deleteSessionRequest(e)} className="aside__settings-signout">
                    <div className="aside__settings-signout_img">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M661 5105 c-150 -33 -254 -83 -363 -175 -117 -97 -209 -237 -255 -385 l-28 -90 0 -1895 0 -1895 28 -90 c80 -259 283 -462 542 -542 l90 -28 1140 0 1140 0 90 28 c259 80 463 284 542 542 27 90 27 91 28 390 0 299 0 300 -24 338 -13 21 -42 50 -64 65 -34 23 -52 27 -107 27 -55 0 -73 -4 -107 -27 -22 -15 -51 -44 -64 -65 -23 -37 -24 -46 -30 -313 -5 -255 -7 -279 -28 -333 -43 -110 -132 -195 -245 -234 -48 -17 -118 -18 -1136 -18 l-1085 0 -58 23 c-111 45 -195 133 -234 246 -17 48 -18 146 -18 1886 0 1740 1 1838 18 1886 39 113 123 201 234 246 l58 23 1085 0 c1018 0 1088 -1 1136 -18 113 -39 202 -124 245 -234 21 -54 23 -78 28 -334 l6 -276 27 -40 c41 -62 90 -88 168 -88 78 0 127 26 168 88 l27 41 0 300 c-1 300 -1 301 -28 391 -79 258 -283 462 -542 542 l-90 28 -1115 2 c-924 1 -1126 -1 -1179 -12z" />
                                <path d="M4315 3391 c-88 -41 -133 -131 -113 -227 9 -46 23 -62 191 -231 l181 -183 -1235 -2 -1235 -3 -41 -27 c-63 -41 -88 -90 -88 -169 0 -54 5 -72 27 -106 15 -22 44 -51 65 -64 l38 -24 1234 -3 1235 -2 -181 -183 c-168 -169 -182 -185 -191 -231 -34 -162 126 -295 273 -227 26 12 132 112 306 287 247 250 268 274 300 344 33 74 34 77 34 210 0 133 -1 136 -34 210 -32 70 -53 94 -300 344 -174 175 -280 275 -306 287 -51 24 -109 24 -160 0z" />
                            </g>
                        </svg>
                    </div>
                    <div className="aside__settings-signout_title">
                        <h1>{language.account.buttons.signout}</h1>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar