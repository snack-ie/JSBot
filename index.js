require("./online");
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
console.log("Up and running!");
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(process.env.PREFIX)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice((process.env.PREFIX).length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, data);
    } catch (err) {
    console.log(err);
  }
});

client.login(process.env.TOKEN);
