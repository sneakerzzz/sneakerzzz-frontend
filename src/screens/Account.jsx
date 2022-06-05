import { Sidebar } from "../components/account"

function Account({ user, cookie }) {
    return (
        <>
            <Sidebar user={user} cookie={cookie} />
        </>
    )
}

export default Account