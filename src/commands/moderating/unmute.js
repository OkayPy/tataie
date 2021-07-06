const errors = require("../../../utils/errors.js") //better errors
const usage = require("../../../utils/usage.js"); //better help-messages
const { prefix } = require("../../loaders/reader") //get prefix from botconfig

module.exports = {
    config: {
        name: "unmute",
        usage: "$unmute <user>",
        description: "unmute",
        permissions: "manage roles"
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return errors.noPerms(message, "MANAGE_ROLES");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return errors.lack(message.channel, "MANAGE_ROLES");

        let cmd = message.content.split(" ")[0].replace(prefix, ''); //because command aliases
        if(args[0] == "help") return message.channel.send(usage.fullHelp(bot, cmd));

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!mutee) return errors.cantfindUser(message.channel);

        let muterole = message.guild.roles.find(r => r.name === "sclavii nu au voie sa vb")
        if(!muterole) return message.channel.send("Nu e mut!") //if no role

        if(!mutee.roles.has(muterole.id)) return message.channel.send("Nu e mut bai autistule"); //if not muted
        mutee.removeRole(muterole.id); //remove role
        return message.channel.send(`${mutee} nu mai e mut!`);
    }
}
