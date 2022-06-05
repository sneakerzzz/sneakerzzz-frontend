import api from "../../constans/api"

function Sidebar({ user, cookie }) {
    return (
        <aside>
            <div className="aside__inner inner-mini">
                <div className="aside__account">
                    <div className="aside__account-img">
                        <img src={`${api.url}/${user.img}`} alt="" />
                    </div>
                    <div className="aside__account-username title">
                        <h3>{user.username}</h3>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar