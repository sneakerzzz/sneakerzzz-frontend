import { useLanguage } from "../../hooks"
import { useState, useEffect } from "react"
import api from "../../constans/api"
import axios from "axios"
import images from "../../constans/images"
import { useNavigate } from "react-router-dom"
import { responseHandler } from "../../hooks"

function Settings({ user, cookie, setTrigger, language }) {

    const [username, setUsername] = useState('')
    const [lang, setLang] = useState('')
    const [img, setImg] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [previewImg, setPreviewImg] = useState()
    const [changeEmailModal, setChangeEmailModal] = useState(false)
    const [changePasswordModal, setChangePasswordModal] = useState(false)
    const [deleteAccountModal, setDeleteAccountModal] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [_password, _setPassword] = useState('')
    const [testimg, settsetimg] = useState()

    const navigate = useNavigate()
    const dispatcher = responseHandler()

    useEffect(() => {
        setUsername(user.username)
        setLang(user.lang)
        setEmail(user.email)
        setPassword(user.password)
        setImg(user.img)
    }, [user])

    function updateAccountRequest(e) {
        e.preventDefault()
        if (username !== user.username) {
            axios.post(`${api.url}/api/account/change-username?lang=${language.lang}`, {
                username: username,
                sessionID: cookie
            }).then(response => {
                dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
                if (response.data.success) {
                    setUsername(user.username)
                    setTrigger(true)
                }
            }).catch(error => {
                dispatcher({ message: 'Error', title: 'Alert', type: false })
            })
        }
        if (lang !== user.lang) {
            axios.post(`${api.url}/api/account/change-lang?lang=${language.lang}`, {
                lang: lang,
                sessionID: cookie
            }).then(response => {
                dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
                if (response.data.success) {
                    setLang(user.username)
                    setTrigger(true)
                }
            }).catch(error => {
                dispatcher({ message: 'Error', title: 'Alert', type: false })
            })
        }
        if (img !== user.img) {
            let formData = new FormData()
            formData.append('img', img)
            formData.append('sessionID', cookie)

            axios({
                url: `${api.url}/api/account/change-img?lang=${language.lang}`,
                method: 'post',
                data: formData
            }).then(response => {
                dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
                if (response.data.success) {
                    setImg(user.img)
                    setTrigger(true)
                }
            }).catch(error => {
                dispatcher({ message: 'Error', title: 'Alert', type: false })
            })
        }
    }

    function changeEmailRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/change-email?lang=${language.lang}`, {
            newEmail: newEmail,
            password: _password,
            sessionID: cookie
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                emailModal(false)
                setTrigger(true)
                setNewEmail('')
                _setPassword('')
            }
        }).catch(error => {
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

    function changePasswordRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/change-password?lang=${language.lang}`, {
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
            password: _password,
            sessionID: cookie
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                passwordModal(false)
                setTrigger(true)
                setNewPassword('')
                setConfirmNewPassword('')
                _setPassword('')
            }
        }).catch(error => {
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

    function deleteAccountRequest(e) {
        e.preventDefault()
        axios.post(`${api.url}/api/account/delete-user?lang=${language.lang}`, {
            sessionID: cookie,
            password: _password
        }).then(response => {
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
            if (response.data.success) {
                accountModal(false)
                setTrigger(true)
                _setPassword('')
                navigate('/')
            }
        }).catch(error => {
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
    }

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

    function test(e) {
        e.preventDefault()

        let formData = new FormData()
        formData.append('images', testimg)
        formData.append('name', 'Pharrell Williams x Adidas')
        formData.append('code', 'pharrell_williams_adidas')
        formData.append('description', 'Skateboard P has been a mainstay in the adidas roster for years now. A prolific producer, songwriter, musician, designer and cultural tastemaker, the collaboration started with court classics like the Stan Smith, before Pharrell introduced his technicolor Superstar pack, which included a staggering 50 colorways.')
        formData.append('sessionID', cookie)
        axios({
            url: `${api.url}/api/collections/add?lang=en`,
            method: 'post',
            data: formData
        }).then(response => {
            console.log(response);
            dispatcher({ message: response.data.message, title: 'Alert', type: response.data.success })
        }).catch(error => {
            dispatcher({ message: 'Error', title: 'Alert', type: false })
        })
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
                                            <button onClick={(e) => changeEmailRequest(e)} className="settings__modal-form_button" type="submit">{language.account.settings.buttons.change}</button>
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
            <input onChange={(e) => {
                settsetimg(e.target.files[0])
            }} type="file" className="" />
            <button onClick={(e) => test(e)}>awfawf</button>
        </section >
    )
}

export default Settings