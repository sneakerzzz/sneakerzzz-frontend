import api from "../../constans/api"

function Header({ user }) {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <div className="header__logo-title title">
                                <h3>Sneakerzzz.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__cart">

                        </div>
                        {
                            user ?
                                (
                                    <div className="header__account">
                                        <div className="header__account-img">
                                            <img title={user.username} src={`${api.url}/${user.img}`} alt="" />
                                        </div>
                                    </div>
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