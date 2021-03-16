require("./online");
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
let { username, discriminator, id } = client.user
console.log(`Up and running as ${username}#${discriminator} (${id})!\nInvite me using this link: https://discord.com/oauth2/authorize?client_id=${id}&permissions=8&scope=bot`);
});

let config = require("./config");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice((config.prefix).length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
    console.log(err);
  }
});

client.login(process.env.TOKEN);
