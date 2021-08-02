const { Client, Message, MessageEmbed } = require("discord.js");
const { maincolor, prefix } = require("../../config.json");

module.exports = {
  name: "help-fun",
  cooldown: 5000,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user = message.author.username;
    const embed = new MessageEmbed()
      .setTitle(`${user} here is all my fun commands!`)
      .setDescription(
        "```If you have a bad day, so will these commands help you!```"
      )
      .addField(
        `${prefix}meme`,
        "Get memes from the bot, if you have a bad day!"
      )
      .addField(
        `${prefix}math`,
        "Give the bot a math question! And it will give you a good response"
      )
      .addField(
        `${prefix}chat <reply>`,
        "Chay with Joyy if you have a bad day!"
      )
      .addField(`${prefix}djs <query>`, "Get docs from https://discord.js.org")
      .setColor(maincolor);

    message.channel.send(embed);
  },
};
