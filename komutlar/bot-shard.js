const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar/bot.json');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.MessageEmbed()
    .setTitle('Shard İstatistik')
    .setColor("#ffd100")
    .setImage(`https://cdn.discordapp.com/attachments/720258926628700223/761193792455311360/Y7jFCB.png`)
    
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`<a:hypesquad1:761188472630804480> **Shard ${i}**`, `<a:hypesquad1:761188472630804480>  **Ping:** ${Math.round(shardinfo.ping[i])}ms\n<a:hypesquad1:761188472630804480>  **Sunucu:** ${shardinfo.server_count[i]}\n <a:hypesquad1:761188472630804480> **Kullanıcı:** ${shardinfo.user_count[i]}\n <a:hypesquad1:761188472630804480> **Uptime:** ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} \n <a:hypesquad1:761188472630804480> **Bu Sunucunun Shardı Id'si**: ${client.shard.id}`, true)
    }
    message.channel.send(shardembed)
}
exports.config = {
  name: "shard",
  aliases: []
};
