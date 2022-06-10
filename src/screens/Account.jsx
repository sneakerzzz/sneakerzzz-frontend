import { Sidebar, Settings, Payment } from "../components/account"
import { Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

function Account({ user, cookie, getUser }) {
    return (
        <>
            <Helmet>
                <title>Account || Sneakerzzz</title>
                <meta name="description" content="Your account settings" />
            </Helmet>
            <Sidebar user={user} cookie={cookie} />
            <Routes>
                <Route index element={<Settings user={user} cookie={cookie} getUser={getUser} />} />
                <Route path="/payment" element={<Payment user={user} cookie={cookie} />} />
            </Routes>
        </>
    )
}

export default Account