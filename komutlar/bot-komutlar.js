const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Marley - Komut Sayısı`)
    .setDescription('**\n Marley Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ffd100")
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Metro-M.svg/768px-Metro-M.svg.png')
    .setTimestamp()
    .setFooter("Marley | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

