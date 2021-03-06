const lang = [
    {
        title: 'English',
        lang: 'en',
        notification: {
            alert: 'Alert',
            successfulLogin: "Successful login",
            incorrectPassword: "Incorrect password",
            userNotFound: "User not found",
            missingFields: "Missing fields",
            usernameAlreadyExists: "Username already exists",
            emailAlreadyExists: "Email already exists",
            successfulRegister: "Registration successful",
            successfulImgChange: "Profile picture has been changed successfully",
            successfulFullnameChange: "Fullname has been changed successfully",
            successfulLangChange: "Language has been changed successfully",
            sessionNotFound: "There was an error during request",
            serverIsNotAvailable: "Server is not available",
            error: 'Error',
            passwordsDoNotMatch: 'Passwords do not match',
            sessionDeleted: 'Session was deleted successfully',
            emailIsNotValid: 'Email is not valid',
            profileChanged: 'Profile has been updated successfully'
        },
        login: {
            stepOne: {
                title: "Login to your account",
                inputs: {
                    username: "Username",
                    password: "Password",
                    email: "Email"
                },
                buttons: {
                    rememberMe: "Remember me",
                    login: "Login",
                    dontHaveAccount: "Do not have an account?"
                }
            }
        },
        register: {
            stepOne: {
                title: "Register",
                inputs: {
                    username: "Username",
                    password: "Password",
                    confirmPassword: "Confirm password",
                    email: "Email"
                },
                buttons: {
                    register: "Register",
                    alreadyHaveAccount: "Already have an account?"
                }
            },
            stepTwo: {
                title: "Choose your profile picture",
                inputs: {
                    img: "Select profile image"
                },
                buttons: {
                    done: "Done",
                    skip: "Skip"
                }
            },
            stepThree: {
                title: "Choose your profile language",
                inputs: {
                    language: "Select language"
                },
                buttons: {
                    done: "Done",
                    skip: "Skip"
                }
            }
        },
        account: {
            account: {
                title: 'Account'
            },
            payment: {
                title: 'Payment'
            },
            settings: {
                title: 'Settings',
                inputs: {
                    username: 'Username',
                    lang: 'Language',
                    email: 'Email',
                    password: 'Password',
                    changeEmail: 'Change email',
                    changePassword: 'Change password',
                    deleteAccount: 'Delete account',
                    newEmail: 'New email',
                    confirmNewEmail: 'Confirm email email',
                    newPassword: 'New password',
                    confirmNewPassword: 'Confirm new password'
                },
                buttons: {
                    save: 'Save',
                    cancel: 'Cancel',
                    change: 'Change',
                    delete: 'Delete'
                }
            },
            buttons: {
                signout: 'Sign out'
            }
        },
        home: {
            trendings: {
                title: 'Trendings'
            },
            newArrivals: {
                title: 'New Arrivals'
            }
        },
        product: {
            colors: 'Colors:',
            price: 'Price:'
        }
    },
    {
        title: '??????????????',
        lang: 'ru',
        notification: {
            alert: '??????????????????????',
            successfulLogin: "???? ?????????????? ?????????? ?? ??????????????",
            incorrectPassword: "???????????????????????? ????????????",
            userNotFound: "?????????????????????????? ?? ?????????? ?????????????? ???? ????????????????????",
            missingFields: "?????????????????? ?????? ????????",
            usernameAlreadyExists: "???????????? ?????????? ?????? ??????????",
            emailAlreadyExists: "???????????? ?????????? ?????? ????????????",
            successfulRegister: "???????????????? ??????????????????????",
            successfulImgChange: "???????????? ???????????????? ?????? ?????????????? ??????????????",
            successfulFullnameChange: "?????? ???????????????? ?????? ?????????????? ??????????????",
            successfulLangChange: "???????? ???????????????? ?????? ?????????????? ??????????????",
            sessionNotFound: "?????????????????? ???????????? ?? ???????? ??????????????",
            serverIsNotAvailable: "???????????? ????????????????????",
            error: '????????????',
            passwordsDoNotMatch: '???????????? ???? ??????????????????',
            sessionDeleted: '???????????? ???????? ?????????????? ??????????????',
            emailIsNotValid: '???????????????????????? ?????????????????????? ??????????',
            profileChanged: '?????????????? ?????? ???????????????? ??????????????'
        },
        login: {
            stepOne: {
                title: "?????????????? ?? ??????????????",
                inputs: {
                    username: "??????????",
                    password: "????????????",
                    email: "?????????????????????? ??????????"
                },
                buttons: {
                    rememberMe: "?????????????????? ????????",
                    login: "??????????",
                    dontHaveAccount: "?? ?????? ???????? ?????????????????"
                }
            }
        },
        register: {
            stepOne: {
                title: "????????????????????????????????????",
                inputs: {
                    username: "??????????",
                    password: "????????????",
                    confirmPassword: "?????????????????????????? ????????????",
                    email: "?????????????????????? ??????????"
                },
                buttons: {
                    register: "????????????????????????????????????",
                    alreadyHaveAccount: "?? ?????? ?????? ???????? ???????????????"
                }
            },
            stepTwo: {
                title: "???????????????? ????????????",
                inputs: {
                    img: "???????????????? ????????????????"
                },
                buttons: {
                    done: "????????????",
                    skip: "????????????????????"
                }
            },
            stepThree: {
                title: "???????????????? ????????",
                inputs: {
                    language: "???????????????? ????????"
                },
                buttons: {
                    done: "????????????",
                    skip: "????????????????????"
                }
            }
        },
        account: {
            account: {
                title: '??????????????'
            },
            settings: {
                title: '??????????????????',
                inputs: {
                    username: '??????????',
                    lang: '????????',
                    email: '?????????????????????? ??????????',
                    password: '????????????',
                    changeEmail: '???????????????? ?????????????????????? ??????????',
                    changePassword: '???????????????? ????????????',
                    deleteAccount: '?????????????? ??????????????',
                    newEmail: '?????????? ????. ??????????',
                    confirmNewEmail: '?????????????????????????? ?????????? ????. ??????????',
                    newPassword: '?????????? ????????????',
                    confirmNewPassword: '?????????????????????????? ???????????? ????????????'
                },
                buttons: {
                    save: '??????????????????',
                    cancel: '????????????????',
                    change: '????????????????',
                    delete: '??????????????'
                }
            },
            payment: {
                title: '??????????????'
            },
            buttons: {
                signout: '??????????'
            }
        },
        home: {
            trendings: {
                title: '????????????????????'
            },
            newArrivals: {
                title: '??????????????'
            }
        },
        product: {
            colors: '??????????:',
            price: '????????:'
        }
    }
]

export default lang