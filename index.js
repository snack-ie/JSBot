require("./online");
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
let { username, discriminator, id } = client.user;
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
    let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

    fs.writeFile('./errors/' + year + month + date + hours + minutes + seconds + '.txt', err.stack, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  }
});

client.login(process.env.TOKEN);