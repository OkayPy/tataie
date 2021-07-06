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


    
        message.channel.send(message.author.displayAvatarURL())

        }

}