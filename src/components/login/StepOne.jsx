import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import api from "../../constans/api";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { responseHandler } from '../../hooks'

function StepOne({ language, setStep }) {

    const history = useNavigate()

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { setCookie } = useContext(GlobalContext)
    const dispatcher = responseHandler()

    function loginRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/login?lang=${language.lang}`, {
            email: email,
            password: password
        }).then(response => {
            dispatcher({message: response.data.message, title: 'Alert', type: response.data.success})
            if (response.data.success) {
                setCookie(response.data.sessionID)
                setStep(1)
                setEmail('')
                setPassword('')
                history('/')
            }
        }).catch(error => {
            dispatcher({message: 'Error', title: 'Alert', type: false})
        })
    }

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
                        <button type="submit" onClick={(e) => loginRequest(e)} className="login__form-button">{language.login.stepOne.buttons.login}</button>
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