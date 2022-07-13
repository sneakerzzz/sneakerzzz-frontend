import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "../components/register";
import { Sidebar } from "../components/navigation";
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Register({ user, userLoading }) {

    const [step, setStep] = useState(1)
    const [cookie, setCookie] = useState()
    const language = useLanguage({})
    const navigate = useNavigate()

    const steps = [
        {
            step: language.register.stepOne.title
        },
        {
            step: language.register.stepTwo.title
        },
        {
            step: language.register.stepThree.title
        }
    ]

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
                                <>
                                    <Sidebar language={language} step={step} steps={steps} />
                                    {
                                        step === 1 ?
                                            (
                                                <StepOne setCookie={setCookie} language={language} step={step} setStep={setStep} />
                                            )
                                            :
                                            step === 2 ?
                                                (
                                                    <StepTwo cookie={cookie} language={language} step={step} setStep={setStep} />
                                                )
                                                :
                                                step === 3 ?
                                                    (
                                                        <StepThree cookie={cookie} language={language} setStep={setStep} />
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

export default Register;