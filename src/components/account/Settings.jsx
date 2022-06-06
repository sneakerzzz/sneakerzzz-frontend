import { useLanguage } from "../../hooks"

function Settings({ user, cookie }) {

    const language = useLanguage({user})

    return (
        <section className="settings">
            <div className="container">
                <div className="settings__inner inner">
                    <div className="settings__title title">
                        <h1>{language.account.account.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings