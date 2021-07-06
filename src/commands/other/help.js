const { RichEmbed } = require("discord.js");
const { prefix, purple } = require("../../loaders/reader"); //get prefix/purple elements from finalConfig in reader.js
const gethelp = require("../../../utils/usage.js"); //better help-messages

module.exports = {
    config: {
        name: "help",
        aliases: ["halp", "commands"],
        usage: "$help",
        description: "informatii despre comenzi",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        if(args[0]) {
            let command = args[0];
            let embed = gethelp.fullHelp(bot, command);
            return message.channel.send(embed);
        } else {
            let Sembed = new RichEmbed()
                .setColor(purple)
                .setAuthor(`ajutor:`)
                .setThumbnail(bot.user.displayAvatarURL) //bot avatar
                .setTimestamp()
                .setDescription(`prefixu e ${prefix} \n Ca sa vezi chestii despre o comanda scrie $help <comanda>  \n Comenzile functioneaza numai in server, nu in dmuri. \n Comenzile tale: `)
                .addField(`Comenzi:`, "``8ball`` ``cat`` ``dog`` ``meme`` ``addrole`` ``ban`` ``kick`` ``mute`` ``purge`` ``removerole`` ``unmute`` ``warn`` ``botinfo`` ``helpmsg`` ``help`` ``ping`` ``serverinfo`` ``urban`` ``orfani`` ``trashtalk`` ");
            message.author.send(Sembed);
        }
    } 
}