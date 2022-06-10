import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import api from "../../constans/api";


function StepOne({ language, setStep, setCookie }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [lang, setlang] = useState('')
    const [requestResult, setRequestResult] = useState({})

    useEffect(() => {
        setlang(window.navigator.language.split("-")[0])
    }, [])

    function registerRequest(e) {
        e.preventDefault()
        setRequestResult({})
        if (confirmPassword === password) {
            axios.post(`${api.url}/api/account/register`, {
                username: username,
                password: password,
                lang: lang,
                email: email
            }).then(response => {
                if (response.data.success) {
                    if (response.data.message === 'Registration successful') {
                        setRequestResult({ message: language.notification.successfulRegister, success: true })
                    }
                    setCookie(response.data.sessionID)
                    setStep(2)
                    setUsername('')
                    setPassword('')
                    setEmail('')
                    setConfirmPassword('')
                } else {
                    if (response.data.message === 'Error') {
                        setRequestResult({ message: language.notification.error, success: false })
                    }
                    if (response.data.message === 'Missing fields') {
                        setRequestResult({ message: language.notification.missingFields, success: false })
                    }
                    if (response.data.message === 'Email already exists') {
                        setRequestResult({ message: language.notification.emailAlreadyExists, success: false })
                    }
                    if (response.data.message === 'Passwords do not match') {
                        setRequestResult({ message: language.notification.passwordsDoNotMatch, success: false })
                    }
                }
            }).catch(error => {
                setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
            })
        } else {
            setRequestResult({ message: language.notification.passwordsDoNotMatch, success: false })
        }
    }

    console.log(requestResult);

    return (
        <section className="register">
            <div className="container">
                <div className="register__inner inner">
                    <div className="register__title title">
                        <h1>{language.register.stepOne.title}</h1>
                    </div>
                    <form onSubmit={(e) => registerRequest(e)} className="register__form">
                        <div className="register__form-input">
                            <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} placeholder={language.register.stepOne.inputs.username} />
                        </div>
                        <div className="register__form-input">
                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder={language.register.stepOne.inputs.email} />
                        </div>
                        <div className="register__form-input">
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={language.register.stepOne.inputs.password} />
                        </div>
                        <div className="register__form-input">
                            <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder={language.register.stepOne.inputs.confirmPassword} />
                        </div>
                        <button onClick={(e) => registerRequest(e)} className="register__form-button">{language.register.stepOne.buttons.register}</button>
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