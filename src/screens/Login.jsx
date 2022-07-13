import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne } from "../components/login";
import { Sidebar } from "../components/navigation";
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Login({ user, userLoading }) {

    const [step, setStep] = useState(1)
    const language = useLanguage({})
    const navigate = useNavigate()

    const steps = [
        {
            step: language.login.stepOne.title
        }
    ]

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
                                <>
                                    <Sidebar language={language} step={step} steps={steps} />
                                    {
                                        step === 1 ?
                                            (
                                                <StepOne language={language} step={step} setStep={setStep} />
                                            )
                                            :
                                            null
                                    }
                                </>
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