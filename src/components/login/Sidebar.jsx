function SideBar({ language, step }) {

    const stepItems = [
        {
            step: language.login.stepOne.title
        }
    ]

    return (
        <aside className="aside">
            <div className="aside__inner inner-mini">
                <div className="aside__steps">
                    {
                        stepItems.map((stepItem, key) => (
                            <div className="aside__step" key={key} >
                                <div className="aside__step-left">
                                    <div className={step === key + 1 ? 'aside__step-circle active' : 'aside__step-circle'}>
                                        <h1>{key + 1}</h1>
                                    </div>
                                </div>
                                <div className="aside__step-right">
                                    <div className="aside__step-title">
                                        <h1>{stepItem.step}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

export default SideBar;