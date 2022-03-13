class ActionProvider {
    constructor(
     createChatBotMessage, setStateFunc) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
   }

   chatHandler = (msg) => {
     const message = this.createChatBotMessage(msg);
     this.setChatbotMessage(message);
   }

   setChatbotMessage = (message)=> {
     this.setState(state=> ({...state, messages : [...state.messages,message]}))
   }



 }
 
 export default ActionProvider;