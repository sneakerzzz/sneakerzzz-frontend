function Sidebar({ step, steps }) {

    return (
        <aside className="aside__auth">
            <div className="aside__inner inner-mini">
                <div className="aside__auth-steps">
                    {
                        steps.map((stepItem, key) => (
                            <div className="aside__auth-step" key={key} >
                                <div className="aside__auth-step_left">
                                    <div className={step === key + 1 ? 'aside__auth-step_circle active' : 'aside__auth-step_circle'}>
                                        <p>{key + 1}</p>
                                    </div>
                                </div>
                                <div className="aside__auth-step_right">
                                    <div className="aside__auth-step_title">
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

export default Sidebar;