import { useLanguage } from "../hooks";
import { useState } from "react";
import { StepOne, Sidebar } from "../components/login";

function Login() {

    const [step, setStep] = useState(1)

    const language = useLanguage()

    return (
        <>
            <Sidebar language={language} step={step} />
            <StepOne language={language} step={step} setStep={setStep} />
        </>
    )
}

export default Login;