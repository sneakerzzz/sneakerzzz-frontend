import { useLanguage } from "../../hooks"
import { useState, useEffect } from "react"
import api from "../../constans/api"
import axios from "axios"
import images from "../../constans/images"
import { useNavigate } from "react-router-dom"

function Settings({ user, cookie, setTrigger }) {

    const language = useLanguage({ user })

    const [username, setUsername] = useState('')
    const [lang, setLang] = useState('')
    const [img, setImg] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [previewImg, setPreviewImg] = useState()
    const [requestResults, setRequestResults] = useState([])
    const [changeEmailModal, setChangeEmailModal] = useState(false)
    const [changePasswordModal, setChangePasswordModal] = useState(false)
    const [deleteAccountModal, setDeleteAccountModal] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [_password, _setPassword] = useState('')

    const navigate = useNavigate()

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
                    setTrigger(true)
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
                    setTrigger(true)
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
                    setTrigger(true)
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
    }

    function changeEmailRequest(e) {
        e.preventDefault()
        setRequestResults([])
        axios.post(`${api.url}/api/account/change-email`, {
            newEmail: newEmail,
            password: _password,
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Email has been changed successfully') {
                    setRequestResults([...requestResults, { message: language.notification.successfulLangChange, success: true }])
                }
                emailModal(false)
                setTrigger(true)
                setNewEmail('')
                _setPassword('')
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
                if (response.data.message === 'Incorrect password') {
                    setRequestResults([...requestResults, { message: language.notification.incorrectPassword, success: false }])
                }
                if (response.data.message === 'Email already exists') {
                    setRequestResults([...requestResults, { message: language.notification.emailAlreadyExists, success: false }])
                }
            }
        }).catch(error => {
            console.log(error);
            setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
        })
    }

    function changePasswordRequest(e) {
        e.preventDefault()
        console.log(confirmNewPassword, newPassword, _password);
        setRequestResults([])
        axios.post(`${api.url}/api/account/change-password`, {
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
            password: _password,
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Password has been changed successfully') {
                    setRequestResults([...requestResults, { message: language.notification.successfulLangChange, success: true }])
                }
                passwordModal(false)
                setTrigger(true)
                setNewPassword('')
                setConfirmNewPassword('')
                _setPassword('')
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
                if (response.data.message === 'Incorrect password') {
                    setRequestResults([...requestResults, { message: language.notification.incorrectPassword, success: false }])
                }
            }
        }).catch(error => {
            console.log(error);
            setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
        })
    }

    function deleteAccountRequest(e) {
        e.preventDefault()
        setRequestResults([])
        axios.post(`${api.url}/api/account/delete-user`, {
            sessionID: cookie,
            password: _password
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'User was deleted succesfully') {
                    setRequestResults([...requestResults, { message: language.notification.successfulLangChange, success: true }])
                }
                accountModal(false)
                setTrigger(true)
                _setPassword('')
                navigate('/')
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
                if (response.data.message === 'Incorrect password') {
                    setRequestResults([...requestResults, { message: language.notification.incorrectPassword, success: false }])
                }
            }
        }).catch(error => {
            console.log(error);
            setRequestResults([...requestResults, { message: language.notification.serverIsNotAvailable, success: false }])
        })
    }

    console.log(requestResults);

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

    function emailModal(value) {
        const body = document.querySelector('body')
        if (value) {
            setChangeEmailModal(true)
            body.classList.add('lock')
        } else {
            setChangeEmailModal(false)
            body.classList.remove('lock')
        }
    }

    function passwordModal(value) {
        const body = document.querySelector('body')
        if (value) {
            setChangePasswordModal(true)
            body.classList.add('lock')
        } else {
            setChangePasswordModal(false)
            body.classList.remove('lock')
        }
    }

    function accountModal(value) {
        const body = document.querySelector('body')
        if (value) {
            setDeleteAccountModal(true)
            body.classList.add('lock')
        } else {
            setDeleteAccountModal(false)
            body.classList.remove('lock')
        }
    }

    // function test() {
    //     axios.get(`${api.url}/api/product/random?lang=en`).then(response => {
    //         console.log(response.data);
    //     })
    // }

    // test()

    return (
        <section className="settings">
            <div className="container">
                <div className="settings__inner inner">
                    <div className="settings__title title">
                        <h1>{language.account.settings.title}</h1>
                    </div>
                    <div className="settings__block">
                        <div className="settings__left">
                            <form className="settings__form" onSubmit={(e) => updateAccountRequest(e)}>
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
                                        }} type="file" className="settings__form-img_input" />
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
                            <div className="settings__banners">
                                <div className="settings__banner">
                                    <div className="settings__banner-title">
                                        <h1>{language.account.settings.inputs.changeEmail}</h1>
                                    </div>
                                    <button onClick={() => emailModal(true)} className="settings__banner-button" type="button">{language.account.settings.buttons.change}</button>
                                </div>
                                <div className="settings__banner">
                                    <div className="settings__banner-title">
                                        <h1>{language.account.settings.inputs.changePassword}</h1>
                                    </div>
                                    <button onClick={() => passwordModal(true)} className="settings__banner-button" type="button">{language.account.settings.buttons.change}</button>
                                </div>
                                <div className="settings__banner">
                                    <div className="settings__banner-title">
                                        <h1>{language.account.settings.inputs.deleteAccount}</h1>
                                    </div>
                                    <button onClick={() => accountModal(true)} className="settings__banner-button" type="button">{language.account.settings.buttons.delete}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        changeEmailModal ?
                            (
                                <div className="settings__modal">
                                    <div className="settings__modal-window">
                                        <div className="settings__modal-close" onClick={() => emailModal(false)}>
                                            <img src={images.close} alt="" />
                                        </div>
                                        <div className="settings__modal-title">
                                            <h1>{language.account.settings.inputs.changeEmail}</h1>
                                        </div>
                                        <form onSubmit={(e) => changeEmailRequest(e)} className="settings__modal-form">
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.newEmail} value={newEmail} type="text" onChange={(e) => setNewEmail(e.target.value)} />
                                            </div>
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.password} value={_password} type="password" onChange={(e) => _setPassword(e.target.value)} />
                                            </div>
                                            <button onClick={(e) => changeEmailRequest(e)} className="settings__modal_form-button" type="submit">{language.account.settings.buttons.change}</button>
                                        </form>
                                    </div>
                                </div>
                            )
                            :
                            null
                    }
                    {
                        changePasswordModal ?
                            (
                                <div className="settings__modal">
                                    <div className="settings__modal-window">
                                        <div className="settings__modal-close" onClick={() => passwordModal(false)}>
                                            <img src={images.close} alt="" />
                                        </div>
                                        <div className="settings__modal-title">
                                            <h1>{language.account.settings.inputs.changePassword}</h1>
                                        </div>
                                        <form onSubmit={(e) => changePasswordRequest(e)} className="settings__modal-form">
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.newPassword} value={newPassword} type="text" onChange={(e) => setNewPassword(e.target.value)} />
                                            </div>
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.confirmNewPassword} value={confirmNewPassword} type="text" onChange={(e) => setConfirmNewPassword(e.target.value)} />
                                            </div>
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.password} value={_password} type="password" onChange={(e) => _setPassword(e.target.value)} />
                                            </div>
                                            <button onClick={(e) => changePasswordRequest(e)} className="settings__modal-form_button" type="submit">{language.account.settings.buttons.change}</button>
                                        </form>
                                    </div>
                                </div>
                            )
                            :
                            null
                    }
                    {
                        deleteAccountModal ?
                            (
                                <div className="settings__modal">
                                    <div className="settings__modal-window">
                                        <div className="settings__modal-close" onClick={() => accountModal(false)}>
                                            <img src={images.close} alt="" />
                                        </div>
                                        <div className="settings__modal-title">
                                            <h1>{language.account.settings.inputs.deleteAccount}</h1>
                                        </div>
                                        <form className="settings__modal-form" onSubmit={(e) => deleteAccountRequest(e)}>
                                            <div className="settings__modal-form_input sub-title">
                                                <input placeholder={language.account.settings.inputs.password} value={_password} type="text" onChange={(e) => _setPassword(e.target.value)} />
                                            </div>
                                            <button onClick={(e) => deleteAccountRequest(e)} className="settings__modal-form_button" type="submit">{language.account.settings.buttons.delete}</button>
                                        </form>
                                    </div>
                                </div>
                            )
                            :
                            null
                    }
                </div >
            </div >
        </section >
    )
}

export default Settings