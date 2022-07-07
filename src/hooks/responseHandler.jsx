import { NotificationGet } from "../components/notification/NotificationProvider"

function responseHandler() {
    const dispatch = NotificationGet()

    function dispatcher(response){
        if (Array.isArray(response.message)) {
            response.message.forEach(message => {
                dispatch({
                    type: response.type,
                    message: message,
                    title: response.title
                })
            })
        } else {
            dispatch({
                type: response.type,
                message: response.message,
                title: response.title
            })
        }
    }

    return dispatcher
}

export default responseHandler