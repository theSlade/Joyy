const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "leaveguild",
  cooldown: 5000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const guild = client.guilds.cache.get("822805220982915093");
    guild.leave().then(() => console.log(`Leaved: ${guild}`));
    message.reply(`Leaved: ${guild}`);
  },
};
