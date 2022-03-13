import {setUserChat} from '../redux/action';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if(message) {
         this.actionProvider.chatHandler(message);
         setUserChat(this.state.messages)
      }
    }
  }
  
  export default MessageParser;