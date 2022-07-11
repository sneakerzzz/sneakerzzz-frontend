import api from "../../constans/api"
import { Link } from "react-router-dom"
import { useLanguage } from "../../hooks"
import images from "../../constans/images"

function Header({ user, userLoading }) {

    const language = useLanguage({})

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <Link to='/' className="header__logo-title title">
                                <h3>Sneakerzzz.</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <Link to="/favourites" className="header__favourites">
                            <div className="header__favourites-img">
                                {images.favourites}
                            </div>
                        </Link>
                        <Link to="/cart" className="header__cart">
                            <div className="header__cart-img">
                                {images.cart}
                            </div>
                        </Link>
                        {
                            userLoading ?
                                (
                                    user ?
                                        (
                                            <Link to="/account" className="header__account">
                                                <div className="header__account-img">
                                                    <img title={user.username} src={`${api.url}/${user.img}`} alt="" />
                                                </div>
                                            </Link>
                                        )
                                        :
                                        <Link to="/login" className="header__register">
                                            <button type="button" className="header__register-button">{language.login.stepOne.buttons.login}</button>
                                        </Link>
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header