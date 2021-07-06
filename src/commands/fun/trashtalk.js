const { RichEmbed } = require("discord.js");
const errors = require("../../../utils/errors"); //better errors
const usage = require("../../../utils/usage"); //better helpmessages 
const second = require("../../../utils/othererrors.js"); //better errors
const { prefix } = require("../../loaders/reader") //get prefix from botconfig

module.exports = {
    config: {
        name: "trashtalk",
        aliases: ["trashtalk", "trash"],
        usage: "$trashtalk",
        description: "trashtalk bagamias pula",
        permissions: "none"
    },
    run: async (bot, message, args) => {
    
        message.channel.send('bagamias pula in tactu ala ciung')
        message.channel.send('ca sa iti numar membrii familiei pe degete trebuie sa imi tai 9 degete')


    }
}