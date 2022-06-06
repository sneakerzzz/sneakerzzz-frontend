import api from "../../constans/api"
import { Link } from "react-router-dom"

function Header({ user }) {
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
                        <div className="header__cart">

                        </div>
                        {
                            user ?
                                (
                                    <Link to="/account" className="header__account">
                                        <div className="header__account-img">
                                            <img title={user.username} src={`${api.url}/${user.img}`} alt="" />
                                        </div>
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