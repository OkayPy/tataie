const { RichEmbed } = require("discord.js");

module.exports = { 
  config: {
    name: "botinfo",
    aliases: ["binfo"],
    usage: "$botinfo",
    description: "niste informatii",
    permissions: "none"
  },
  run: async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL; //bot avatar
    let botembed = new RichEmbed()
        .setDescription("Informatii despre bot")
        .setColor("#"+((1<<24)*Math.random()|0).toString(16))   //hex color randomizer
        .setThumbnail(bicon)
        .addField("Nume bot:", bot.user.username)
        .addField("creat in data de:", bot.user.createdAt);
    message.channel.send(botembed);
  }
}