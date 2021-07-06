const { get } = require("snekfetch");

module.exports = {
    config: {
        name: "orfani",
        usage: "$orfani",
        description: "imaginea la orfani",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        
        message.channel.send("https://cdn.discordapp.com/attachments/861873896646508564/861873905907269663/unknown.png")
        message.channel.send("https://cdn.discordapp.com/attachments/861873896646508564/861874647641620490/unknown.png")
    }
}