import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar, StepTwo, StepThree } from "../components/register";
import {Helmet} from 'react-helmet'

function Register({user}) {

    const [step, setStep] = useState(1)
    const [cookie, setCookie] = useState()

    const language = useLanguage({})


    return (
        <>
            <Helmet>
                <title>Register || Sneakerzzz</title>
                <meta name="description" content="Register your account" />
            </Helmet>
            {
                step === 1 ?
                    (
                        <>
                            <Sidebar language={language} step={step} />
                            <StepOne setCookie={setCookie} language={language} step={step} setStep={setStep} />
                        </>
                    )
                    :
                    step === 2 ?
                        (
                            <>
                                <Sidebar language={language} step={step} />
                                <StepTwo cookie={cookie} language={language} step={step} setStep={setStep} />
                            </>
                        )
                        :
                        step === 3 ?
                            (
                                <>
                                    <Sidebar language={language} step={step} />
                                    <StepThree cookie={cookie} language={language} setStep={setStep} />
                                </>
                            )
                            :
                            null
            }
        </>
    )
}

export default Register;