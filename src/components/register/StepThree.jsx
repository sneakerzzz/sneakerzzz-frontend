import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import api from "../../constans/api";
import { useEffect } from "react";
import { responseHandler } from "../../hooks";


function StepThree({ language, setStep, cookie }) {

    const history = useNavigate()
    const [lang, setLang] = useState()
    const dispatcher = responseHandler()

    useEffect(() => {
        setLang(language.lang)
    }, [language])

    function changeLangRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/change-lang?lang=${language.lang}`, {
            lang: lang,
            sessionID: cookie
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                setStep(1)
                setLang()
                history('/login')
            } 
        }).catch(error => {
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }


    return (
        <section className="register">
            <div className="container">
                <div className="register__inner inner">
                    <div className="register__title title">
                        <h1>{language.register.stepThree.title}</h1>
                    </div>
                    <form onSubmit={(e) => changeLangRequest(e)} className="register__form">
                        <div className="register__form-select">
                            <select value={lang} onChange={(e) => setLang(e.target.value)}>
                                <option value='en'>English</option>
                                <option value='ru'>Русский</option>
                            </select>
                        </div>
                        <button type="submit" onClick={(e) => changeLangRequest(e)} className="register__form-button">{language.register.stepThree.buttons.done}</button>
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