import { NavLink } from "react-router-dom"
import { useLanguage } from "../../hooks"
import { useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { useNavigate } from "react-router-dom"

function Sidebar({ user, cookie }) {

    const language = useLanguage({ user })
    const [requestResult, setRequestResult] = useState({})

    const history = useNavigate()

    const links = [
        {
            title: language.account.settings.title,
            link: '/account',
            img: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M1980 5099 c-112 -50 -120 -73 -176 -451 -25 -172 -47 -314 -47 -314
           -1 -1 -31 -16 -67 -34 -36 -18 -108 -60 -160 -93 -52 -33 -100 -60 -106 -60
           -6 0 -139 51 -295 114 -255 102 -290 114 -344 113 -69 0 -128 -26 -167 -73
           -32 -37 -525 -889 -539 -931 -19 -54 -7 -145 27 -192 18 -25 125 -117 269
           -230 l240 -187 1 -200 2 -200 -241 -188 c-132 -103 -252 -205 -268 -226 -31
           -43 -44 -106 -35 -170 9 -61 510 -928 566 -978 47 -43 113 -64 173 -56 23 4
           166 56 317 117 151 61 282 112 290 112 8 1 54 -24 101 -55 48 -30 120 -72 160
           -92 41 -21 75 -38 76 -39 1 -1 22 -142 47 -314 56 -378 64 -401 176 -451 43
           -20 63 -21 580 -21 l535 0 51 24 c60 28 108 83 122 140 6 22 29 171 52 331 23
           159 42 291 43 291 1 1 35 18 76 39 40 20 112 62 160 92 47 31 93 56 101 55 8
           0 139 -51 290 -112 151 -61 293 -113 316 -116 68 -10 146 19 189 69 33 37 417
           689 516 875 44 82 52 153 24 220 -23 53 -36 65 -296 269 l-236 185 1 199 1
           200 240 187 c144 113 251 205 269 230 34 48 46 138 27 193 -6 17 -126 231
           -267 475 -180 312 -267 454 -294 478 -46 41 -108 60 -170 53 -25 -4 -169 -56
           -320 -117 -151 -61 -282 -112 -290 -112 -8 -1 -53 24 -100 54 -47 31 -120 73
           -162 94 -43 21 -78 42 -78 45 0 4 -20 145 -44 312 -54 370 -64 395 -176 446
           -43 20 -63 21 -580 21 -517 0 -537 -1 -580 -21z m837 -1728 c107 -35 136 -49
           218 -104 91 -62 171 -143 234 -238 189 -282 189 -656 0 -938 -117 -175 -268
           -286 -479 -352 -65 -20 -96 -24 -230 -23 -122 0 -168 4 -215 18 -275 84 -476
           262 -574 508 -190 476 79 1011 574 1142 92 24 101 25 245 21 119 -3 146 -7
           227 -34z"/>
                </g>
            </svg>
        },
        {
            title: language.account.payment.title,
            link: '/account/payment',
            img: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M445 4308 c-27 -5 -86 -27 -131 -48 -111 -54 -200 -142 -253 -253
           -51 -106 -61 -165 -61 -368 0 -139 3 -170 16 -183 14 -14 259 -16 2544 -16
           2285 0 2530 2 2544 16 13 13 16 44 16 183 0 203 -10 262 -61 368 -73 152 -230
           273 -393 302 -77 14 -4147 13 -4221 -1z"/>
                    <path d="M16 3104 c-14 -14 -16 -109 -16 -903 0 -586 4 -907 11 -947 18 -99
           79 -213 156 -289 76 -76 190 -137 287 -154 83 -15 4129 -15 4212 0 99 18 213
           79 289 156 76 76 137 190 154 287 7 40 11 361 11 947 0 794 -2 889 -16 903
           -14 14 -259 16 -2544 16 -2285 0 -2530 -2 -2544 -16z m1190 -1050 c64 -47 69
           -63 69 -214 0 -124 -2 -141 -21 -166 -47 -64 -63 -69 -214 -69 -124 0 -141 2
           -166 21 -60 44 -69 66 -72 186 -5 135 1 168 35 209 44 52 73 59 215 57 110 -3
           130 -6 154 -24z"/>
                </g>
            </svg>
        }
    ]

    function deleteSessionRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.url}/api/account/delete-session`, {
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Session was deleted successfully') {
                    setRequestResult({ message: language.notification.successfulLogin, success: true })
                }
                history('/login')
                document.location.reload()
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
        <aside className="aside">
            <div className="aside__inner">
                <ol className="aside__nav">
                    {
                        links.map((link, key) => (
                            <NavLink key={key} end to={link.link} className={({ isActive }) => {
                                if (isActive) {
                                    return 'active aside__nav-link'
                                } else {
                                    return 'aside__nav-link'
                                }
                            }}>
                                <div className="aside__nav-link-img">
                                    {link.img}
                                </div>
                                <div className="aside__nav-link-title">
                                    <h1>{link.title}</h1>
                                </div>
                            </NavLink>
                        ))
                    }
                </ol>
                <div onClick={(e) => deleteSessionRequest(e)} className="aside__signout">
                    <div className="aside__signout-img">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M661 5105 c-150 -33 -254 -83 -363 -175 -117 -97 -209 -237 -255 -385 l-28 -90 0 -1895 0 -1895 28 -90 c80 -259 283 -462 542 -542 l90 -28 1140 0 1140 0 90 28 c259 80 463 284 542 542 27 90 27 91 28 390 0 299 0 300 -24 338 -13 21 -42 50 -64 65 -34 23 -52 27 -107 27 -55 0 -73 -4 -107 -27 -22 -15 -51 -44 -64 -65 -23 -37 -24 -46 -30 -313 -5 -255 -7 -279 -28 -333 -43 -110 -132 -195 -245 -234 -48 -17 -118 -18 -1136 -18 l-1085 0 -58 23 c-111 45 -195 133 -234 246 -17 48 -18 146 -18 1886 0 1740 1 1838 18 1886 39 113 123 201 234 246 l58 23 1085 0 c1018 0 1088 -1 1136 -18 113 -39 202 -124 245 -234 21 -54 23 -78 28 -334 l6 -276 27 -40 c41 -62 90 -88 168 -88 78 0 127 26 168 88 l27 41 0 300 c-1 300 -1 301 -28 391 -79 258 -283 462 -542 542 l-90 28 -1115 2 c-924 1 -1126 -1 -1179 -12z"/>
                                <path d="M4315 3391 c-88 -41 -133 -131 -113 -227 9 -46 23 -62 191 -231 l181 -183 -1235 -2 -1235 -3 -41 -27 c-63 -41 -88 -90 -88 -169 0 -54 5 -72 27 -106 15 -22 44 -51 65 -64 l38 -24 1234 -3 1235 -2 -181 -183 c-168 -169 -182 -185 -191 -231 -34 -162 126 -295 273 -227 26 12 132 112 306 287 247 250 268 274 300 344 33 74 34 77 34 210 0 133 -1 136 -34 210 -32 70 -53 94 -300 344 -174 175 -280 275 -306 287 -51 24 -109 24 -160 0z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="aside__signout-title">
                        <h1>{language.account.buttons.signout}</h1>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar