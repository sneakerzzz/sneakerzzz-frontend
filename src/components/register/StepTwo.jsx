import { useState } from "react";
import axios from 'axios'
import api from "../../constans/api";
import { responseHandler } from "../../hooks";

function StepTwo({ language, setStep, cookie }) {

    const [img, setImg] = useState()
    const [previewImg, setPreviewImg] = useState()
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const dispatcher = responseHandler()

    function changeImgRequest(e) {
        e.preventDefault()

        let formData = new FormData()
        formData.append('img', img)
        formData.append('sessionID', cookie)
        axios({
            url: `${api.url}/api/account/change-img?lang=${language.lang}`,
            method: 'post',
            data: formData
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success})
            if (response.data.success) {
                setStep(3)
                setImg()
            }
        }).catch(error => {
            dispatcher({message: 'Error', title: 'Alert', type: false})
        })
    }

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0])
            const reader = new FileReader()

            reader.onload = function (e) {
                setPreviewImg(e.target.result)
                setPreviewUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setPreviewUploaded(false)
            setImg()
        }
    }

    return (
        <section className="register">
            <div className="container">
                <div className="register__inner inner">
                    <div className="register__title title">
                        <h1>{language.register.stepTwo.title}</h1>
                    </div>
                    <form onSubmit={(e) => changeImgRequest(e)} action="" className="register__form">
                        <div className="register__form-preview">
                            <div className="register__form-img">
                                {
                                    previewUploaded ?
                                        <img src={previewImg} alt="" />
                                        :
                                        <img src={`${api.url}/uploads/default-avatar.png`} alt="" />
                                }
                            </div>
                            <div className="register__form-input">
                                <input onChange={(e) => {
                                    handleImageChange(e)
                                }} type="file" />
                            </div>
                        </div>
                        <button type="submit" onClick={(e) => changeImgRequest(e)} className="register__form-button">{language.register.stepTwo.buttons.done}</button>
                        <div onClick={() => setStep(3)} className="register__form-note sub-info">
                            <p>{language.register.stepTwo.buttons.skip}</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepTwo;