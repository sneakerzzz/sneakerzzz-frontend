import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../constans/api"
import { responseHandler } from "../../hooks"
import Product from "../Product"

function NewArrivals({ language }) {

    const [newArrivals, setNewArrivals] = useState()
    const [newArrivalsLoading, setNewArrivalsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const dispatcher = responseHandler()

    function getRequest() {
        setNewArrivalsLoading(false)
        axios.get(`${api.url}/api/products/new_arrivals?lang=${language.lang}&limit=6&page=${page}`).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                setNewArrivals(response.data.data)
                setNewArrivalsLoading(true)
            }
        }).catch(error => {
            setNewArrivalsLoading(true)
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

    useEffect(() => {
        getRequest()
    }, [])

    return (
        <section className="newarrivals">
            <div className="container">
                <div className="newarrivals__inner inner">
                    <div className="newarrivals__title title">
                        <h2>{language.home.newArrivals.title}</h2>
                    </div>
                    <div className="newarrivals__list list">
                        {
                            newArrivals ?
                                (
                                    newArrivalsLoading ?
                                        (
                                            newArrivals.length > 0 ?
                                                (
                                                    newArrivals.map((product) => (
                                                        <Product product={product} language={language} />
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

export default NewArrivals