import { useLanguage, useCookie } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar } from "../components/login";
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Login({ user, userLoading }) {

    const [step, setStep] = useState(1)
    const language = useLanguage({})
    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Login || Sneakerzzz</title>
                <meta name="description" content="Login to your account" />
            </Helmet>
            {
                userLoading ?
                    (
                        !user ?
                            (
                                step === 1 ?
                                    (
                                        <>
                                            <Sidebar language={language} step={step} />
                                            <StepOne language={language} step={step} setStep={setStep} />
                                        </>
                                    )
                                    :
                                    null
                            )
                            :
                            navigate('/')
                    )
                    :
                    <Loading />
            }
        </>
    )
}

export default Login;