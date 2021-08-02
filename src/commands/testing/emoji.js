const { Client, Message, MessageEmbed, Emoji } = require("discord.js");
const { mainemoji } = require("../../config.json");
const ban = require("../../bans.json");

module.exports = {
  name: "emoji",
  cooldown: 2000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let bann = ban.banned.includes(message.author.id);
    if (!bann);
    return message.channel.send(
      new MessageEmbed().setTitle("YOU ARE BANNED!").setColor("RED")
    );
    message.channel.send(mainemoji);
  },
};
