const { ownerid } = require("../../loaders/reader"); //get ownerid from botconfig file

module.exports = {
    config: {
        name: "reload",
        aliases: ["creload", "refresh", "fix"]
    },
    run: async (bot, message, args) => {
        if (message.author.id != ownerid) return; //only owner can use

        if(!args[0]) return message.channel.send("de si mie un motiv!");
        let commandName = args[0].toLowerCase();

        let directory;
        try {
            delete require.cache[require.resolve(`../fun/${commandName}.js`)];
            directory = "fun";
        } catch {
            try {
                delete require.cache[require.resolve(`../moderating/${commandName}.js`)];
                directory = "moderating"
            } catch {
                try {
                    delete require.cache[require.resolve(`../other/${commandName}.js`)];
                    directory = "other"
                } catch {
                    try {
                        delete require.cache[require.resolve(`../owner/${commandName}.js`)];
                        directory = "owner"
                    } catch {
                        return message.channel.send("nam gasit comanda");
                    }
                }
            }
        }
        /* the try and catch above will through testing get the directory of the command specified */
        bot.commands.delete(commandName);
        const pull = require(`../${directory}/${commandName}.js`);
        bot.commands.set(commandName, pull);
        return message.channel.send(`comanda \`${args[0].toUpperCase()}\` a fost reincarcata!`);
    }
}