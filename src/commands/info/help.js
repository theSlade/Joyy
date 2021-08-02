const { Client, Message, MessageEmbed } = require("discord.js");
const { maincolor, mainemoji } = require("../../config.json");

module.exports = {
  name: "help",
  cooldown: 5000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user = message.author.username;
    const embed = new MessageEmbed()
      .setTitle(`Hey ${user}, how can i help you?`)
      .setDescription(
        "Welcome to the help panel, down below can you see\nAll the categories off my commands!\n"
      )
      .addField(`${mainemoji} Fun Commands`, "```j!help-fun```", true)
      .addField("⚙️ Config Commands", "```j!help-config```", true)
      .addField("🔒 Admin Commands", "```j!help-admin```", true)
      .addField("ℹ️ Info Commands", "```j!help-info```", true)
      .setColor(maincolor)
      .setTimestamp();

    message.channel.send(embed);
  },
};
