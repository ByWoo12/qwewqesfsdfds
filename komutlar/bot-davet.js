const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`Marley Linkler`, client.user.avatarURL())
.setDescription('**• [Marley`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=749384383655575605&scope=bot&permissions=8)**\n\n**• [Marley Oy Ver #YAKINDA](https://yakında)**\n\n**• [Marley Bot Sitesi #YAKINDA](https://yakında)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };