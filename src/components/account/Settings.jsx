import { useLanguage } from "../../hooks"
import { useState, useEffect } from "react"
import api from "../../constans/api"
import axios from "axios"

function Settings({ user, cookie, getUser }) {

    const language = useLanguage({ user })

    const [username, setUsername] = useState('')
    const [lang, setLang] = useState('')
    const [img, setImg] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [previewImg, setPreviewImg] = useState()
    const [requestResults, setRequestResults] = useState([])
    const [requestResult, setRequestResult] = useState({})

    useEffect(() => {
        setUsername(user.username)
        setLang(user.lang)
        setEmail(user.email)
        setPassword(user.password)
        setImg(user.img)
    }, [user])

    function updateAccountRequest(e) {
        e.preventDefault()
        setRequestResults([])
        setRequestResult({})
        if (username !== user.username) {
            axios.post(`${api.url}/api/account/change-username`, {
                username: username,
                sessionID: cookie
            }).then(response => {
                console.log(response);
                if (response.data.success) {
                    if (response.data.message === 'Username has been changed successfully') {
                        setRequestResults([...requestResults, { message: language.notification.successfulLangChange, success: true }])
                    }
                    setUsername(user.username)
                    getUser()
                } else {
                    if (response.data.message === 'Error') {
                        setRequestResults([...requestResults, { message: language.notification.error, success: false }])
                    }
                    if (response.data.message === 'Missing fields') {
                        setRequestResults([...requestResults, { message: language.notification.missingFields, success: false }])
                    }
                    if (response.data.message === 'Session not found') {
                        setRequestResults([...requestResults, { message: language.notification.sessionNotFound, success: false }])
                    }
                }
            }).catch(error => {
                console.log(error);
                setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
            })
        }
        if (lang !== user.lang) {
            axios.post(`${api.url}/api/account/change-lang`, {
                lang: lang,
                sessionID: cookie
            }).then(response => {
                console.log(response);
                if (response.data.success) {
                    if (response.data.message === 'Language has been changed successfully') {
                        setRequestResults([...requestResults, { message: language.notification.successfulLangChange, success: true }])
                    }
                    setLang(user.username)
                    getUser()
                } else {
                    if (response.data.message === 'Error') {
                        setRequestResults([...requestResults, { message: language.notification.error, success: false }])
                    }
                    if (response.data.message === 'Missing fields') {
                        setRequestResults([...requestResults, { message: language.notification.missingFields, success: false }])
                    }
                    if (response.data.message === 'Session not found') {
                        setRequestResults([...requestResults, { message: language.notification.sessionNotFound, success: false }])
                    }
                }
            }).catch(error => {
                console.log(error);
                setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
            })
        }
        if (img !== user.img) {
            let formData = new FormData()
            formData.append('img', img)
            formData.append('sessionID', cookie)

            axios({
                url: `${api.url}/api/account/change-img`,
                method: 'post',
                data: formData
            }).then(response => {
                console.log(response);
                if (response.data.success) {
                    if (response.data.message === 'Image has been changed successfully') {
                        setRequestResults([...requestResults, { message: language.notification.successfulImgChange, success: true }])
                    }
                    setImg(user.img)
                    getUser()
                } else {
                    if (response.data.message === 'Error') {
                        setRequestResults([...requestResults, { message: language.notification.error, success: false }])
                    }
                    if (response.data.message === 'Missing fields') {
                        setRequestResults([...requestResults, { message: language.notification.missingFields, success: false }])
                    }
                    if (response.data.message === 'Session not found') {
                        setRequestResults([...requestResults, { message: language.notification.sessionNotFound, success: false }])
                    }
                }
            }).catch(error => {
                console.log(error);
                setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
            })
            if (requestResults[0].success && requestResults[1].success && requestResults[2].success) {
                setRequestResult({ message: language.notification.profileChanged, success: true })
            } else {
                setRequestResult({ message: language.notification.error, success: false })
            }
        }
    }

    console.log(requestResult);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0])
            const reader = new FileReader()

            reader.onload = function (e) {
                setPreviewImg(e.target.result)
                setPreviewUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setPreviewUploaded(false)
            setImg(user.img)
        }
    }

    return (
        <section className="settings">
            <div className="container">
                <div className="settings__inner inner">
                    <div className="settings__title title">
                        <h1>{language.account.settings.title}</h1>
                    </div>
                    <div className="settings__block">
                        <div className="settings__left">
                            <form className="settings__form">
                                <div className="settings__up">
                                    <div className="settings__form-img">
                                        {
                                            previewUploaded ?
                                                <img src={previewImg} alt="" />
                                                :
                                                <img src={`${api.url}/${img}`} alt="" />
                                        }
                                        <input onChange={(e) => {
                                            handleImageChange(e)
                                        }} type="file" className="settings__form-img-input" />
                                    </div>
                                </div>
                                <div className="settings__down">
                                    <div className="settings__form-input sub-title">
                                        <h1>{language.account.settings.inputs.username}</h1>
                                        <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="settings__form-input sub-title">
                                        <h1>{language.account.settings.inputs.email}</h1>
                                        <input disabled={true} value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="settings__form-input sub-title">
                                        <h1>{language.account.settings.inputs.lang}</h1>
                                        <select value={lang} onChange={(e) => setLang(e.target.value)}>
                                            <option value='ru'>Русский</option>
                                            <option value='en'>English</option>
                                        </select>
                                    </div>
                                    <div className="settings__form-input sub-title">
                                        <h1>{language.account.settings.inputs.password}</h1>
                                        <input disabled={true} value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="settings__form-buttons">
                                    <button type='button' onClick={() => {
                                        setUsername(user.username)
                                        setLang(user.lang)
                                        setEmail(user.email)
                                        setPassword(user.password)
                                        setImg(user.img)
                                        setPreviewUploaded(false)
                                    }} className="settings__form-button secondary">{language.account.settings.buttons.cancel}</button>
                                    <button type="button" onClick={(e) => updateAccountRequest(e)} className="settings__form-button">{language.account.settings.buttons.save}</button>
                                </div>
                            </form>
                        </div>
                        <div className="settings__right">

                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Settings