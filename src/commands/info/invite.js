const { Client, Message, MessageEmbed } = require("discord.js");
const { maincolor } = require("../../config.json");
module.exports = {
  name: "invite",
  cooldown: 5000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle(`Click on this message to invite me!`)
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=871680404116094976&permissions=8&scope=bot"
      )
      .setColor(maincolor);

    message.channel.send(embed);
  },
};
