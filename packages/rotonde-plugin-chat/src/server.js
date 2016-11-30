import { RotondeServerPlugin } from 'rotonde-plugin';
import { NAMESPACES, MESSAGES } from 'rotonde-plugin-chat-messages';

export default class ChatServerPlugin extends RotondeServerPlugin {

  constructor(server) {
    super(server);
    this.namespace = this.server.of(NAMESPACES.ROTONDE_PLUGIN_CHAT);
  }

  sendMessage(id, type, user, message) {
    this.namespace.emit(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, {
      id,
      type,
      user,
      message
    });
  }

}
