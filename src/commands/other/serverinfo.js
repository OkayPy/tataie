const { RichEmbed } = require("discord.js");

module.exports = {
  config: {
    name:"serverinfo",
    aliases: ["serverdesc"],
    usage: "$serverinfo",
    description: "niste info despre server",
    permissions: "none" 
  },
  run: async (bot, message, args) => {
    if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");

    let sicon = message.guild.iconURL; //server image

    let serverembed = new RichEmbed()
      .setDescription("Informatii server")
      .setColor("#"+((1<<24)*Math.random()|0).toString(16)) //hex color randomizer
      .setThumbnail(sicon)
      .addField("Nume", message.guild.name)
      .addField("Creat in", message.guild.createdAt)
      .addField("Tu ai intrat in", message.member.joinedAt)
      .addField("Membri totali", message.guild.memberCount);
    message.channel.send(serverembed);
  }
}