const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help-config",
  cooldown: 5000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    return message.channel.send("UNDER DEVELOPMENT!");
  },
};
