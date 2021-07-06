const errors = require("../../../utils/errors.js"); //better errors

module.exports = {
    config: {
        name: "removerole",
        aliases: ["roleremove"],
        usage: "$removerole <user>",
        description: "SCOATE ROLU",
        permissions: "manage roles"
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return errors.noPerms(message, "MANAGE_ROLES");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return errors.lack(message.channel, "MANAGE_ROLES");

        let cmd = message.content.split(" ")[0]; //because command aliases
        if(args[0] == "help") return message.channel.send(`sintaxa comenzii: ${cmd} (user) <rolu>`);

        let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
        if(!rMember) return errors.cantfindUser(message.channel);

        if (rMember.id === bot.user.id) return errors.botuser(message, "am scos un rol de la");

        let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first();
        if(!role) return errors.noRole(message.channel);

        if(!rMember.roles.has(role.id)) { //if user does not have specified role
            return message.channel.send(`**${rMember.displayName} nu are rolu ala**`);
        } else {
            await rMember.removeRole(role.id); //remove role
            message.channel.send(`**rolu ${role.name} a fost scos de la ${rMember.displayName} ca e ultimu cracker.**`);
        }
    }
}