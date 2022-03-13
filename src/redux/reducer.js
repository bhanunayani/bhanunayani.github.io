const initialState = {
    messages : []
}

export const reducer=(state = initialState,action)=> {
    if(action.type == 'messageAdded'){
        return [
            ...state,
            action.messages = [...action.messages,this.state.messages]
        ]
    }
}
