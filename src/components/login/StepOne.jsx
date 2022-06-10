import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import api from "../../constans/api";


function StepOne({ language, step, setStep }) {

    const cookies = new Cookies()
    const history = useNavigate()

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [requestResult, setRequestResult] = useState({})

    function loginRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.url}/api/account/login`, {
            email: email,
            password: password
        }).then(response => {
            if (response.data.success) {
                if (response.data.message === 'Login successful') {
                    setRequestResult({ message: language.notification.successfulLogin, success: true })
                }
                cookies.set('sessionID', response.data.sessionID, {
                    path: '/',
                    maxAge: 3600 * 24 * 265 * 100
                })
                setStep(1)
                setEmail('')
                setPassword('')
                history('/')
                document.location.reload()
            } else {
                if (response.data.message === 'Error') {
                    setRequestResult({ message: language.notification.error, success: false })
                }
                if (response.data.message === 'Missing fields') {
                    setRequestResult({ message: language.notification.missingFields, success: false })
                }
                if (response.data.message === 'User not found') {
                    setRequestResult({ message: language.notification.userNotFound, success: false })
                }
                if (response.data.message === 'Incorrect password') {
                    setRequestResult({ message: language.notification.incorrectPassword, success: false })
                }
            }
        }).catch(error => {
            setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
        })
    }

    console.log(requestResult);

    return (
        <section className="login">
            <div className="container">
                <div className="login__inner inner">
                    <div className="login__title title">
                        <h1>{language.login.stepOne.title}</h1>
                    </div>
                    <form onSubmit={(e) => loginRequest(e)} className="login__form">
                        <div className="login__form-input">
                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder={language.login.stepOne.inputs.email} />
                        </div>
                        <div className="login__form-input">
                            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={language.login.stepOne.inputs.password} />
                        </div>
                        <button onClick={(e) => loginRequest(e)} className="login__form-button">{language.login.stepOne.buttons.login}</button>
                        <Link to="/register" className="login__form-note sub-info">
                            <p>{language.login.stepOne.buttons.dontHaveAccount}</p>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepOne;