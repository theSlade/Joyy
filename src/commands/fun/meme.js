const { Client, Message, MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
const { mainemoji } = require("../../config.json");

module.exports = {
  name: "meme",
  cooldown: 6000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user = message.author.username;
    let subreddits = ["memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`${mainemoji} Here is your meme **${user}**`)
      .setURL(`https://www.reddit.com/r/arabfunny`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};
