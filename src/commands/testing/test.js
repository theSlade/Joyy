const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "test",
  cooldown: 2000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("This is Joyy")
      .setImage(
        "https://github.com/theSlade/Joyy/blob/main/src/assets/joy.png"
      );

    message.channel.send(embed);
  },
};
