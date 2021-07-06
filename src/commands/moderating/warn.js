const errors = require("../../../utils/errors.js"); //better errors

module.exports = {
    config: {
        name: "warn",
        usage: "$warn <user> <reason>",
        description: "warn",
        permissions: "administrator"
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");
        if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
        
        let cmd = message.content.split(" ")[0]; //because command aliases
        if (args[0] == "help") return message.channel.send(`cum se foloseste: ${cmd} <user> <motiv>`);

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!mutee) return message.channel.send("nam gasit user.");

        if (mutee.id === bot.user.id) return errors.botuser(message, "warn");

        let reason = args.join(" ").slice(22);
        if (!reason) reason = "fara motiv"
        
        mutee.send(`Ai fost amenintat in ${message.guild.name} pentru ${reason}`).catch(() => {
            return message.channel.send(":x: are dmurile inchise ca e important");
        });
        return message.channel.send(`${mutee} ***a fost amenintat!***`);

    }
}