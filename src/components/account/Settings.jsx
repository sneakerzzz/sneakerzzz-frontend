import { useLanguage } from "../../hooks"
import { useState, useEffect } from "react"
import api from "../../constans/api"
import images from "../../constans/images"

function Settings({ user, cookie }) {

    const language = useLanguage({ user })

    const [username, setUsername] = useState()
    const [lang, setLang] = useState()
    const [img, setImg] = useState()
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [previewImg, setPreviewImg] = useState()


    function cancelValues() {
        setUsername(user.username)
        setLang(user.lang)
        setImg(user.img)
    }

    useEffect(() => {
        cancelValues()
    }, [])

    function updateAccountRequest(e) {
        e.preventDefault()
    }

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader()

            reader.onload = function (e) {
                setPreviewImg(e.target.result)
                setPreviewUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setPreviewImg(`${api.url}/${user.img}`)
            setPreviewUploaded(false)
            cancelValues()
        }
    }

    return (
        <section className="settings">
            <div className="container">
                <div className="settings__inner inner">
                    <div className="settings__title title">
                        <h1>{language.account.account.title}</h1>
                    </div>
                    <form className="settings__form">
                        <div className="settings__up">
                            <div className="settings__img">
                                {
                                    previewUploaded ?
                                        <img src={previewImg} alt="" />
                                        :
                                        <img src={`${api.url}/${user.img}`} alt="" />
                                }
                                <input onChange={(e) => {
                                    handleImageChange(e)
                                    setImg(e.target.files[0])
                                }} type="file" className="settings__img-input" />
                                {/* <div className="settings__img-edit">
                                    
                                    <img src={images.edit} alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="settings__down">
                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Settings