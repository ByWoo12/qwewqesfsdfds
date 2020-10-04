const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Marley | Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "743971223091937323"; 
 
  var channelID = "761159332515151892"; 
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("<a:hypesquad1:761188472630804480> Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<a:hypesquad1:761188472630804480> • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<a:hypesquad1:761188472630804480> • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<a:hypesquad1:761188472630804480> • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 