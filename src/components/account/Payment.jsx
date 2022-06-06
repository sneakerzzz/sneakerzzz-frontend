import { useLanguage } from "../../hooks"

function Payment({ user, cookie }) {

    const language = useLanguage({user})

    return (
        <section className="payment">
            <div className="container">
                <div className="payment__inner inner">
                    <div className="payment__title title">
                        <h1>{language.account.payment.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment