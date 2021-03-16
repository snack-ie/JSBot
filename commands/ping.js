const Discord = require("discord.js");
module.exports = {
  run: (client, message, args) => {
    message.reply("Pong!")
  },
  /**
   * A basic info. (Your commands don't need to follow this pattern.)
   */
  info: {
    "name":"ping",
    "description":"Pong!",
    "usage":".ping"
  }
}