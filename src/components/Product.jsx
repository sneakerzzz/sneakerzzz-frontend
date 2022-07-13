import api from "../constans/api";
import { Link } from "react-router-dom";
import images from "../constans/images";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Product({ product, language }) {

    const primaryColor = product.colorway.filter((colorway) => colorway.primary === true)[0]

    const { favouritesList, addToFavouritesList, removeFromFavouritesList } = useContext(GlobalContext)

    return (
        <div className="product">
            <div className="product__favourites">
                {
                    favouritesList.find((o) => o._id === product._id) ?
                        <div disabled={favouritesList.find((o) => o._id) ? true : false} onClick={() => removeFromFavouritesList(product._id)} className="product__favourites-img active">
                            {images.heart}
                        </div>
                        :
                        <div onClick={() => addToFavouritesList(product)} className="product__favourites-img">
                            {images.heart}
                        </div>
                }
            </div>
            <div className="product__top">
                <div style={{ backgroundColor: `${primaryColor.code}` }} className="product__top-line"></div>
                <div className="product__top-category">
                    <p>{product.category.name}</p>
                </div>
                <div className="product__top-brand">
                    <p>
                        {
                            product.brand ?
                                (
                                    product.brand.length > 0 ?
                                        (
                                            product.brand.map((brand, key) => {
                                                if (key !== product.brand.length - 1) {
                                                    return `${brand}, `
                                                } else {
                                                    return `${brand}`
                                                }
                                            })
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                    </p>
                </div>
            </div>
            <Link to={`/product/${product._id}`} className="product__middle">
                <div className="product__middle-img">
                    <img src={`${api.url}/${product.images[0]}`} alt="" />
                </div>
                <div className="product__middle-name">
                    <h2>{product.name}</h2>
                </div>
            </Link>
            <div className="product__bottom">
                <div className="product__bottom-colorway">
                    <div className="product__bottom-colorway_title">
                        <p>{language.product.colors}</p>
                    </div>
                    <div className="product__bottom-colorway_list">
                        {
                            product.colorway ?
                                (
                                    product.colorway.length > 0 ?
                                        (
                                            product.colorway.map((colorway) => (
                                                <div title={colorway.code} style={{ backgroundColor: `${colorway.code}` }} className="product__bottom-colorway_item"></div>
                                            ))
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                    </div>
                </div>
                <div className="product__bottom-price">
                    <div className="product__bottom-price_title">
                        <p>{language.product.price}</p>
                    </div>
                    <div className="product__bottom-price_value">
                        <p>{`${product.price.value}$`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product