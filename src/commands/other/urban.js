const urban = require("urban");
const usage = require("../../../utils/usage.js"); //betters help-messages
const { prefix } = require("../../loaders/reader") //get prefix from botconfig

module.exports = {
    config: {
        name: "urban",
        aliases: ["define", "see", "lookup"],
        usage: "$urban <thing to lookup>",
        description: "cauti in dictionar ca esti analfabet",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        var targetWord = args == "" ? urban.random() : urban(args);
        let cmd = message.content.split(" ")[0].replace(prefix, '');
        if (args[0].toLowerCase() == "help") return message.channel.send(usage.fullHelp(bot, cmd));
		targetWord.first(function(json) {
			if (json) {
				var tosend = "dictionar urban: **" +json.word + "**\n\n" + json.definition;
				if (json.example) {
					tosend = tosend + "\n\n__Exemple__:\n" + json.example;
                }
				message.channel.send(tosend);
            } else {
				message.channel.send("nam gasit lol");
            }
        });
    }
}