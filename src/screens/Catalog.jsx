import { Helmet } from "react-helmet"
import { useCookie } from "../hooks"
import Loading from "./Loading"

function Catalog({ user, userLoading }) {

    return (
        <>
            <Helmet>
                <title>Catalog || Sneakerzzz</title>
                <meta name="description" content="Catalog page" />
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

export default Catalog