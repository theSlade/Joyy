const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require("../../models/muterole-schema");

module.exports = {
  name: "set-muterole",
  cooldown: 10000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**:x: You can not use this command!**");

    const muteroleID = message.mentions.roles.first();
    if (!muteroleID)
      return message.channel.send(
        "> :x: **Sry. but the role is not a valid role! Please make sure its a valid role!**"
      );

    Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
      if (data) {
        data.muteroleId = muteroleID;
        data.save();
      } else {
        new Schema({
          muteroleId: muteroleID,
        }).save();
      }
      message.channel.send(
        `> ✅ **Your muterole have been set to:** ${muteroleID}`
      );
    });
  },
};
