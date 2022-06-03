import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar, StepTwo, StepThree } from "../components/register";

function Register() {

    const [step, setStep] = useState(1)
    const [cookie, setCookie] = useState()

    const language = useLanguage()

    return (
        <>
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