import { Helmet } from "react-helmet"
import { useCookie } from "../hooks"
import Loading from "./Loading"

function Home({ user, userLoading }) {

    return (
        <>
            <Helmet>
                <title>Home || Sneakerzzz</title>
                <meta name="description" content="Home page" />
            </Helmet>
            {
                userLoading ?
                    (
                        <h1 className="inner">FAwf</h1>
                    )
                    :
                    <Loading />
            }
        </>
    )
}

export default Home