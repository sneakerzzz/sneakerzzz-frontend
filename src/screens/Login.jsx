import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar } from "../components/login";
import { Helmet } from 'react-helmet'

function Login() {

    const [step, setStep] = useState(1)

    const language = useLanguage()

    return (
        <>
            <Helmet>
                <title>Login || Sneakerzzz</title>
                <meta name="description" content="Login to your account" />
            </Helmet>
            {
                step === 1 ?
                    (
                        <>
                            <Sidebar language={language} step={step} />
                            <StepOne language={language} step={step} setStep={setStep} />
                        </>
                    )
                    :
                    null
            }
        </>
    )
}

export default Login;