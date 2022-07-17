import ContentManager from '../models/contentManager'
import Client from '../models/clients'
import Assistant from '../models/ assistant'

const registerContentManager = async (user) => {
  return await ContentManager.save(user);
}
const registerClient = async (user) => {
    return await Client.save(user);
}
const registerAssistant = (user) => {
    return await Assistant.save(user);
}

module.exports = {registerContentManager, registerClient , registerAssistant}