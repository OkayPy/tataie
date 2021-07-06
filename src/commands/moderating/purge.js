const errors = require("../../../utils/errors.js"); //better errors
const second = require("../../../utils/othererrors.js"); //better errors

module.exports = {
    config: {
        name: "purge",
        aliases: ["del", "delete", "clear"],
        usage: "$purge <amount of messages>",
        description: "DA PURGE",
        permissions: "manage messages"
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm") return message.channel.send("comanda functioneaza doar in server!");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
        if(!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return errors.lack(message.channel, "MANAGE_MESSAGES");

        let cmd = message.content.split(" ")[0]; //because command aliases
        if(args[0] == "help") return message.channel.send(`sterge: ${cmd} (numaru de mesaje)`);

        if(isNaN(args[0])) return message.channel.send(`sterge: ${cmd} (nr de mesaje)`); //must be number not word

        if (args[0] > 1000) return message.channel.send("nu pot sterge mai mult de 1000 de mesaje ca e lag");
        if(args[0] == 0) return message.channel.send("ce mortii matii vrei sa stergi 0 mesaje? O stergi pe mata?");

        const fetched = await message.channel.fetchMessages({limit: args[0]});
        
        try {
            await message.channel.bulkDelete(fetched);
            if (args[0] > 40) {
                message.channel.send(`am sters ${args[0]} mesaje`).then(msg => msg.delete(2000));
            } else return;
        } catch(e) {
            let id = second.getError(e.message);
            message.channel.send(`**-aparent am o eroare cu codu: ${id}**`);
        }
    }
}