import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { responseHandler } from "../../hooks"

function Hero({ language, user }) {

    const [collections, setCollections] = useState()
    const [collectionsLoading, setCollectionsLoading] = useState(false)
    const dispatcher = responseHandler()

    function getRequest() {
        setCollectionsLoading(false)
        axios.get(`${api.url}/api/collections/get?lang=${language.lang}`).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                setCollections(response.data.data)
                setCollectionsLoading(true)
            }
        }).catch(error => {
            setCollectionsLoading(true)
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

    useEffect(() => {
        getRequest()
    }, [])

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner inner">
                    <div className="hero__collections">
                        {
                            collectionsLoading ?
                                (
                                    collections ?
                                        (
                                            collections.length > 0 ?
                                                (
                                                    collections.map((collection, key) => (
                                                        <div className="hero__collection" key={key}>
                                                            <div className="hero__collection-content">
                                                                <div className="hero__collection-title title">
                                                                    <h1>{collection.name}</h1>
                                                                </div>
                                                                <div className="hero__collection-info info">
                                                                    <p>{collection.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className="hero__collection-img">
                                                                <img src={`${api.url}/${collection.images[0]}`} alt="" />
                                                            </div>
                                                        </div>
                                                    ))
                                                )
                                                :
                                                null
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero