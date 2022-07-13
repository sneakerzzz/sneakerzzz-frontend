import api from "../../constans/api"
import { Link } from "react-router-dom"
import { useLanguage } from "../../hooks"
import images from "../../constans/images"
import { useScrollPosition } from "../../hooks"
import { useEffect, useState } from "react"

function Header({ user, userLoading }) {

    const language = useLanguage({})

    const [sticky, setSticky] = useState(false)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== sticky) setSticky(isShow)
        },
        [sticky]
    )

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset === 0) {
                setSticky(true)
            }
        })
    })

    useEffect(() => {
        if (window.scrollY === 0) {
            setSticky(true)
        }
    }, [])

    return (
        <header className={sticky ? 'active' : null} >
            <div className="container-fluid">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to='/' className="header__logo-title title">
                            <h3>Sneakerzzz.</h3>
                        </Link>
                    </div>
                    {/* <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-list_item">
                                <div className="header__menu-list_link">
                                    <h1>Brands</h1>
                                </div>
                            </li>
                            <li className="header__menu-list_item">
                                <Link to="/catalog" className="header__menu-list_link">
                                    <h1>NEwwwwww</h1>
                                </Link>
                            </li>
                        </ul>
                    </nav> */}
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-list_item">
                                <Link to="/favourites" className="header__menu-list_link">
                                    {images.favourites}
                                </Link>
                            </li>
                            <li className="header__menu-list_item">
                                <Link to="/cart" className="header__menu-list_link">
                                    {images.cart}
                                </Link>
                            </li>
                            {
                                userLoading ?
                                    (
                                        user ?
                                            (
                                                <li className="header__menu-list_item">
                                                    <Link to="/account" className="header__menu-list_link">
                                                        <img title={user.username} src={`${api.url}/${user.img}`} alt="" />
                                                    </Link>
                                                </li>
                                            )
                                            :
                                            <div className="header__menu-list_item">
                                                <Link to="/login" className="header__menu-list_link">
                                                    <button type="button" className="header__register-button">{language.login.stepOne.buttons.login}</button>
                                                </Link>
                                            </div>
                                    )
                                    :
                                    null
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header