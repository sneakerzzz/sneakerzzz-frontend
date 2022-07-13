import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { responseHandler } from "../../hooks"
import images from "../../constans/images"

function Hero({ language, user }) {

    const [collections, setCollections] = useState()
    const [collectionsLoading, setCollectionsLoading] = useState(false)
    const [collectionIndex, setCollectionIndex] = useState(0)
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
    console.log(collectionIndex);

    return (
        <section className="hero">
            <div className="container-fluid">
                <div className="hero__inner inner">
                    <div className="hero__collections">
                        {
                            collectionsLoading ?
                                (
                                    collections ?
                                        (
                                            collections.length > 0 ?
                                                (
                                                    <>
                                                        {
                                                            collectionIndex > 0 ?
                                                                (
                                                                    <div onClick={() => setCollectionIndex(collectionIndex - 1)} className="hero__collections-arrow_left">
                                                                        {images.arrowLeft}
                                                                    </div>
                                                                )
                                                                :
                                                                null
                                                        }
                                                        {
                                                            collections.map((collection, key) => (
                                                                <div className={collectionIndex === key ? "hero__collection active" : "hero__collection"} key={key} title={collection.name}>
                                                                    <div className="hero__collection-img">
                                                                        <img src={`${api.url}/${collection.images[0]}`} alt="" />
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                        {
                                                            collectionIndex + 1 < collections.length ?
                                                                (
                                                                    <div onClick={() => setCollectionIndex(collectionIndex + 1)} className="hero__collections-arrow_right">
                                                                        {images.arrowRight}
                                                                    </div>
                                                                )
                                                                :
                                                                null
                                                        }
                                                    </>
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