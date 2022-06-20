import { useLanguage } from "../hooks";
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
                                            <StepOne setCookie={setCookie} language={language} step={step} setStep={setStep} />
                                            <Sidebar language={language} step={step} />
                                        </>
                                    )
                                    :
                                    step === 2 ?
                                        (
                                            <>
                                                <StepTwo cookie={cookie} language={language} step={step} setStep={setStep} />
                                                <Sidebar language={language} step={step} />
                                            </>
                                        )
                                        :
                                        step === 3 ?
                                            (
                                                <>
                                                    <StepThree cookie={cookie} language={language} setStep={setStep} />
                                                    <Sidebar language={language} step={step} />
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