import { Helmet } from "react-helmet"
import Loading from "./Loading"
import { useLanguage } from "../hooks"
import { Hero, Trendings } from "../components/home"

function Home({ user, userLoading }) {

    const language = useLanguage({ user })

    return (
        <>
            <Helmet>
                <title>Home || Sneakerzzz</title>
                <meta name="description" content="Home page" />
            </Helmet>
            {
                userLoading ?
                    (
                        <>
                            <Hero language={language} user={user} />
                            <Trendings language={language} />
                        </>
                    )
                    :
                    <Loading />
            }
        </>
    )
}

export default Home