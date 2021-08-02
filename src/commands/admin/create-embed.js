const { Client, Message, MessageEmbed } = require("discord.js");
const { maincolor } = require("../../config.json");

module.exports = {
  name: "create-embed",
  cooldown: 10000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANNAGE_MESSAGES"))
      return message.channel.send("❌ You cant use that!");
    let title = args[0];
    let color = args[1];
    let description = args.slice(2).join(" ");
    const error = new MessageEmbed()
      .setColor(maincolor)
      .setTitle("**❌ERROR INVALID EMBED**")
      .setDescription(
        "`.embed, title(1 word), color(Hex Color or basic colors example (YELLOW), description(embed description))`"
      )
      .addField("Use this link for hex colors", "https://htmlcolorcodes.com/");

    if (!title) return message.channel.send(error);
    if (!color) return message.channel.send(error);
    if (!description) return message.channel.send(error);

    const embed = new MessageEmbed()
      .setTitle(`**${title}**`)
      .setColor(color)
      .setDescription(description)
      .setFooter(`Embed created by ${message.author.username}`);
    message.delete();

    message.channel.send(embed);
  },
};
