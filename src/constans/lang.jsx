const lang = [
    {
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
            passwordsDoNotMatch: 'Passwords do not match'
        },
        login: {
            stepOne: {
                title: "Login to your account",
                inputs: {
                    username: "Username",
                    password: "Password"
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
        userDashboard: {
            asideBar: {
                links: {
                    settings: "Settings",
                    packages: "Packages",
                    logOut: "Log out",
                    main: "Home",
                    lessons: "Lessons",
                    takeTest: "Take a test",
                    askQuestion: "Ask a question"
                }
            },
            dashboard: {

            }
        }
    },
    {
        lang: 'ru',
        notification: {
            alert: 'Уведомление',
            successfulLogin: "Вы успешно вошли в аккаунт",
            incorrectPassword: "Неправильный пароль",
            userNotFound: "Пользователей с таким логином не существует",
            missingFields: "Заполните все поля",
            usernameAlreadyExists: "Данный логин уже занят",
            emailAlreadyExists: "Данная почта уже занята",
            successfulRegister: "Успешная регистрация",
            successfulImgChange: "Аватар аккаунта был изменен успешно",
            successfulFullnameChange: "ФИО аккаунта был изменен успешно",
            successfulLangChange: "Язык аккаунта был изменен успешно",
            sessionNotFound: "Произошла ошибка в ходе запроса",
            serverIsNotAvailable: "Сервер недоступен",
            error: 'Ошибка',
            passwordsDoNotMatch: 'Пароли не совпадают',
        },
        login: {
            stepOne: {
                title: "Войдите в аккаунт",
                inputs: {
                    username: "Логин",
                    password: "Пароль"
                },
                buttons: {
                    rememberMe: "Запомните меня",
                    login: "Войти",
                    dontHaveAccount: "У вас нету аккаунта?"
                }
            }
        },
        register: {
            stepOne: {
                title: "Зарегистрироваться",
                inputs: {
                    username: "Логин",
                    password: "Пароль",
                    confirmPassword: "Подтверждение пароля",
                    email: "Электронная почта"
                },
                buttons: {
                    register: "Зарегистрироваться",
                    alreadyHaveAccount: "У вас уже есть аккаунт?"
                }
            },
            stepTwo: {
                title: "Выберите аватар",
                inputs: {
                    img: "Выберите аватарку"
                },
                buttons: {
                    done: "Готово",
                    skip: "Пропустить"
                }
            },
            stepThree: {
                title: "Выберите язык",
                inputs: {
                    language: "Выберите язык"
                },
                buttons: {
                    done: "Готово",
                    skip: "Пропустить"
                }
            }
        },
        userDashboard: {
            asideBar: {
                links: {
                    settings: "Настройки",
                    packages: "Пакеты услуг",
                    logOut: "Выйти",
                    main: "Главная",
                    lessons: "Уроки",
                    takeTest: "Пройти тест",
                    askQuestion: "Задать вопрос"
                }
            },
            dashboard: {
                
            }
        }
    }
]

export default lang