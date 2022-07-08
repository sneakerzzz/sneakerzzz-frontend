import { Sidebar, Settings, Payment } from "../components/account"
import { Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Loading from "./Loading"
import { useLanguage } from "../hooks"

function Account({ user, userLoading, cookie, setTrigger }) {

    const language = useLanguage({ user })

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
                                    <Sidebar user={user} cookie={cookie} userLoading={userLoading} language={language} />
                                    <Routes>
                                        <Route index element={<Settings user={user} cookie={cookie} setTrigger={setTrigger} language={language} />} />
                                        <Route path="/payment" element={<Payment user={user} cookie={cookie} language={language} />} />
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