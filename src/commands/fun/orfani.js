const { get } = require("snekfetch");

module.exports = {
    config: {
        name: "orfani",
        usage: "$orfani",
        description: "imaginea la orfani",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send(". . . Caut . . .");

        get("https://cdn.discordapp.com/attachments/861873896646508564/861873905907269663/unknown.png").then(async res => { 
            await message.channel.send({ 
                files: [{
                    attachment: res.body.file,
                    name: "orfani.png"
                }]
            }).then(msg.delete()); 
        });
    }
}