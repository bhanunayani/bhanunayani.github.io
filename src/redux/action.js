import  { message_added } from './types'

export const setUserChat = () => {
    return (dispatch)=> {
        dispatch(messageAdded())
    }   
}

export const messageAdded=()=> {
    return {
        type: message_added,
        messages : "new message"
    } 
}