import { RotondeClientPlugin } from 'rotonde-plugin';
import { NAMESPACES, MESSAGES } from 'rotonde-plugin-chat-messages';

export default class ChatClientPlugin extends RotondeClientPlugin {

  constructor(url) {
    super(`${url}${NAMESPACES.ROTONDE_PLUGIN_CHAT}`);
  }

  sendMessage(id, type, user, message) {
    return this.publish(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, {
      id,
      type,
      user,
      message,
      timestamp: new Date()
    });
  }

  receiveMessage() {
    return this.subscribe(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE);
  }

}
