const { Client, Message, MessageEmbed } = require("discord.js");
const { chatBot } = require("reconlx");
module.exports = {
  name: "chat",
  cooldown: 0000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    chatBot(message, args.join(" "));
  },
};
