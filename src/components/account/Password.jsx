import { useLanguage } from "../../hooks"

function Password({ user, cookie }) {

    const language = useLanguage({user})

    return (
        <section className="password">
            <div className="container">
                <div className="password__inner inner">
                    <div className="password_title title">
                        <h1>{language.account.password.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Password