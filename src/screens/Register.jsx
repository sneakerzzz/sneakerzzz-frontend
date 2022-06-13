import { useLanguage, useCookie } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar, StepTwo, StepThree } from "../components/register";
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Register({ user, userLoading }) {

    const [step, setStep] = useState(1)
    const [cookie, setCookie] = useState()
    const language = useLanguage({})
    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Register || Sneakerzzz</title>
                <meta name="description" content="Register your account" />
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

export default Register;