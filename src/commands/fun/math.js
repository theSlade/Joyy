const { Client, Message, MessageEmbed } = require("discord.js");
const math = require("mathjs");
const { maincolor } = require("../../config.json");

module.exports = {
  name: "math",
  cooldown: 3000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        new MessageEmbed()
          .setDescription("Please provide a **question**!")
          .setColor(maincolor)
      );

    let resp;

    try {
      resp = math.evaluate(args.join(" "));
    } catch (e) {
      return message.channel.send(
        new MessageEmbed()
          .setDescription("Please provide a **valid** question!")
          .setColor(maincolor)
      );
    }

    const embed = new MessageEmbed()
      .setColor(maincolor)
      .setTitle("Calculator")
      .addField("Question", `\`\`\`css\n${args.join(" ")}\`\`\``)
      .addField("Answer", `\`\`\`css\n${resp}\`\`\``);

    message.channel.send(embed);
  },
};
