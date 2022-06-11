import { useState } from "react";
import axios from 'axios'
import api from "../../constans/api";


function StepTwo({ language, setStep, cookie }) {

    const [img, setImg] = useState()
    const [previewImg, setPreviewImg] = useState()
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [requestResult, setRequestResult] = useState({})

    function changeImgRequest(e) {
        e.preventDefault()
        setRequestResult({})

        let formData = new FormData()
        formData.append('img', img)
        formData.append('sessionID', cookie)

        console.log(formData);
        console.log(cookie);
        console.log(img);

        if (img) {
            axios({
                url: `${api.url}/api/account/change-img`,
                method: 'post',
                data: formData
            }).then(response => {
                console.log(response);
                if (response.data.success) {
                    if (response.data.message === 'Image has been changed successfully') {
                        setRequestResult({ message: language.notification.successfulImgChange, success: true })
                    }
                    setStep(3)
                    setImg()
                } else {
                    if (response.data.message === 'Error') {
                        setRequestResult({ message: language.notification.error, success: false })
                    }
                    if (response.data.message === 'Missing fields') {
                        setRequestResult({ message: language.notification.missingFields, success: false })
                    }
                    if (response.data.message === 'Session not found') {
                        setRequestResult({ message: language.notification.sessionNotFound, success: false })
                    }
                }
            }).catch(error => {
                console.log(error);
                setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
            })
        } else {
            setRequestResult({ message: 'Missing fields', success: false })
        }
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
        }
    }

    console.log(requestResult);

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