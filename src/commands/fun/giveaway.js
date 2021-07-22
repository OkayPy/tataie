const { get } = require("snekfetch");

module.exports = {
    config: {
        name: "orfani",
        usage: "$orfani",
        description: "imaginea la orfani",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        
        message.member.send("**__ AI CASTIGAT GIVEAWAYUL, SPUNE SALUT LA PC __**")
    }
}