import { Sidebar, Settings, Payment } from "../components/account"
import { Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Loading from "./Loading"

function Account({ user, userLoading, cookie, setTrigger }) {

    return (
        <>
            <Helmet>
                <title>Account || Sneakerzzz</title>
                <meta name="description" content="Your account settings" />
            </Helmet>
            {
                userLoading ?
                    (
                        user ?
                            (
                                <>
                                    <Sidebar user={user} cookie={cookie} userLoading={userLoading} />
                                    <Routes>
                                        <Route index element={<Settings user={user} cookie={cookie} setTrigger={setTrigger} />} />
                                        <Route path="/payment" element={<Payment user={user} cookie={cookie} />} />
                                    </Routes>
                                </>
                            )
                            :
                            null
                    )
                    :
                    <Loading />
            }
        </>
    )
}

export default Account