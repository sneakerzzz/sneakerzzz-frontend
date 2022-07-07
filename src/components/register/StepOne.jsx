import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import api from "../../constans/api";
import { responseHandler } from "../../hooks";


function StepOne({ language, setStep, setCookie }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [lang, setlang] = useState('')
    const dispatcher = responseHandler()

    useEffect(() => {
        setlang(language.lang)
    }, [language])

    function registerRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/register?lang=${language.lang}`, {
            username: username,
            password: password,
            lang: lang,
            email: email,
            confirmPassword: confirmPassword
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                setCookie(response.data.sessionID)
                setStep(2)
                setUsername('')
                setPassword('')
                setEmail('')
                setConfirmPassword('')
            }
        }).catch(error => {
            dispatcher({message: 'Error', title: 'Alert', type: false})
        })
    }

    return (
        <section className="register">
            <div className="container">
                <div className="register__inner inner">
                    <div className="register__title title">
                        <h1>{language.register.stepOne.title}</h1>
                    </div>
                    <form onSubmit={(e) => registerRequest(e)} className="register__form">
                        <div className="register__form-input">
                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder={language.register.stepOne.inputs.email} />
                        </div>
                        <div className="register__form-input">
                            <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} placeholder={language.register.stepOne.inputs.username} />
                        </div>
                        <div className="register__form-input">
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={language.register.stepOne.inputs.password} />
                        </div>
                        <div className="register__form-input">
                            <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder={language.register.stepOne.inputs.confirmPassword} />
                        </div>
                        <button type="submit" onClick={(e) => registerRequest(e)} className="register__form-button">{language.register.stepOne.buttons.register}</button>
                        <Link to="/login" className="register__form-note sub-info">
                            <p>{language.register.stepOne.buttons.alreadyHaveAccount}</p>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepOne;