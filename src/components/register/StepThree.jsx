import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import api from "../../constans/api";


function StepThree({ language, setStep, cookie }) {

    const history = useNavigate()
    const [requestResult, setRequestResult] = useState({})
    const [lang, setLang] = useState()

    function changeLangRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.url}/api/account/change-lang`, {
            lang: lang,
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Language has been changed successfully') {
                    setRequestResult({ message: language.notification.successfulLangChange, success: true })
                }
                setStep(1)
                setLang()
                history('/login')
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
    }

    console.log(requestResult);

    return (
        <section className="register">
            <div className="container">
                <div className="register__inner inner">
                    <div className="register__title title">
                        <h1>{language.register.stepThree.title}</h1>
                    </div>
                    <form onSubmit={(e) => changeLangRequest(e)} className="register__form">
                        <div className="register__form-select">
                            <select onChange={(e) => setLang(e.target.value)}>
                                <option value=''>{language.register.stepThree.inputs.language}</option>
                                <option value='en'>English</option>
                                <option value='ru'>Русский</option>
                                <option value='kk'>Қазақша</option>
                            </select>
                        </div>
                        <button onClick={(e) => changeLangRequest(e)} className="register__form-button">{language.register.stepThree.buttons.done}</button>
                        <div onClick={() => {
                            setStep(1)
                            history('/login')
                        }} className="register__form-note sub-info">
                            <p>{language.register.stepThree.buttons.skip}</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepThree;