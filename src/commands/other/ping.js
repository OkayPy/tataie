module.exports = {
    config: {
        name: "ping",
        aliases: ["latency"],
        usage: "$ping",
        description: "pingu botutlui!",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        message.channel.send("ma incarc...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            let choices = ["E cumva asta pingu meu?", "E bun pingu?? Nu ma pot uita cas chior ca tactu", "Cre ca nu e rau pingu"];
            let response = choices[Math.floor(Math.random() * choices.length)]; ///get random response
            m.edit(`${response}: Pingu botului: \`${ping}\`, Pingu apiului: \`${Math.round(bot.ping)}\``);
        });
    }
}