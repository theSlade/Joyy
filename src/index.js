const { Collection, Client, Discord } = require("discord.js");
const client = new Client({
  disableMention: "everyone",
});
const path = require("path");
const fs = require("fs");
const config = require("./config.json");
const db = require("./database/mogoDB");
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve("src/commands"));
["command"].forEach((handler) => {
  require(path.resolve(`src/handlers/${handler}`))(client);
});

db;

client.login(config.token);
