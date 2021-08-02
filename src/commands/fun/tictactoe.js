const { Client, Message, MessageEmbed } = require("discord.js");
const { tictactoe } = require("reconlx");
const { maincolor } = require("../../config.json");

module.exports = {
  name: "tictactoe",
  cooldown: 5000,
  description: "tic tac toe command",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member)
      return message.channel.send(
        new MessageEmbed()
          .setDescription("Please specify a user to play against!")
          .setColor(maincolor)
      );

    new tictactoe({
      player_two: member,
      message: message,
    });
  },
};
