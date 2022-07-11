import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { responseHandler } from "../../hooks"

function Trendings({ language }) {

    const [trendings, setTrendings] = useState()
    const [trendingsLoading, setTrendingsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const dispatcher = responseHandler()

    function getRequest() {
        setTrendingsLoading(false)
        axios.get(`${api.url}/api/products/trendings?lang=${language.lang}&limit=6&page=${page}`).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                setTrendings(response.data.data)
                setTrendingsLoading(true)
            }
        }).catch(error => {
            setTrendingsLoading(true)
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

    useEffect(() => {
        getRequest()
    }, [])

    return (
        <section className="trendings">
            <div className="container">
                <div className="trendings__inner inner">
                    <div className="trendings__title title">
                        <h2>{language.home.trendings.title}</h2>
                    </div>
                    <div className="trendings__list">
                        {
                            trendingsLoading ?
                                (
                                    trendings ?
                                        (
                                            trendings.length > 0 ?
                                                (
                                                    trendings.map((product) => (
                                                        <div className="trendings__product">
                                                            <div className="trendings__product-name">
                                                                <h1>{product.name}</h1>
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

export default Trendings