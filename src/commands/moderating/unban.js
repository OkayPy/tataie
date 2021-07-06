const { RichEmbed } = require("discord.js");
const errors = require("../../../utils/errors"); //better errors
const usage = require("../../../utils/usage"); //better helpmessages 
const second = require("../../../utils/othererrors.js"); //better errors
const { prefix } = require("../../loaders/reader") //get prefix from botconfig

module.exports = {
    config: {
        name: "unban",
        aliases: ["unbanish", "removeban"],
        usage: "$unban <user/userid> <reason>",
        description: "unban",
        permissions: "ban members"
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");

        if(!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) return errors.noPerms(message, "BAN_MEMBERS");
        if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return errors.lack(message.channel, "BAN_MEMBERS");

        let cmd = message.content.split(" ")[0].replace(prefix, ''); //used because command aliases
        if (args[0] == "help") return message.channel.send(usage.fullHelp(bot, cmd));

        let ubUser = message.mentions.users.first()
        if(!ubUser) return errors.cantfindUser(message.channel);

        if(ubUser.id === bot.user.id) return errors.botuser(message, "unban"); //if bot return with function botUser()

        const bans = await message.guild.fetchBans();
        if(!bans.get(bUser.id)) return errors.notBanned(message.channel, ubUser.id);

        let ubReason = args.join(" ").slice(22);
        if(!ubReason) ubReason = 'fara motiv';

        if(ubUser.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return errors.equalPerms(message, ubUser, "BAN_MEMBERS");

        let unbanEmbed = new RichEmbed() //create rich embed
            .setDescription("~Unban~")
            .setColor("#bc0000")
            .addField("useru unbanat", `${ubUser} with ID ${ubUser.id}`)
            .addField("unbanat de", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("unbanat in", message.channel)
            .addField("cand", message.createdAt)
            .addField("motiv", ubReason);
        try {
            message.guild.members.unban(ubUser.id, ubReason);
            message.channel.send(unbanEmbed);
        } catch(e) {
            let id = second.getError(e.message);
            message.channel.send(`eroarea cu codu: ${id}`);
        }
    }
}
