const { RichEmbed } = require("discord.js"); 
const errors = require("../../../utils/errors.js"); //better errors
const usage = require("../../../utils/usage.js"); //better help-messages
const { prefix } = require("../../loaders/reader") //get prefix from botconfig

module.exports = {
    config: {
        name: "pfp",
        usage: "$pfp",
        description: "iti vezi poza",
        permissions: "vezi poza"
    },
    
    run: async (bot, message, args) => {


        const avatarAuthor = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(message.author.username)
      .setImage(message.author.avatarURL)
        message.channel.send(avatarAuthor);
        let mention = message.mentions.members.first();
        const avatarMention = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(mention.user.username)
        .setImage(mention.user.avatarURL)
        message.channel.send(avatarMention)

        }

}