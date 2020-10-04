const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Marley Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:761188472630804480> Marley botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:setting:761198163650412579> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:setting:761198163650412579> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:761188472630804480> \`${prefix}davet\` | Marley'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:761188472630804480> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:761188472630804480> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  
  };
exports.config = {
name: "eklenti",
  aliases: []
}
