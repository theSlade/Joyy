const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    return message.reply("PONG!");
  },
};
