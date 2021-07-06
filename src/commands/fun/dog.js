const superagent = require("superagent");

module.exports = {
    config: {
        name: "dog",
        aliases: ["woof", "bark", "doge"],
        usage: "$dog",
        description: "ia imagini cu caini",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send(". . . caut . . .");

        let {body} = await superagent
        .get(`https://dog.ceo/api/breeds/image/random`);
        if(!{body}) return message.channel.send("ce pacat , nu am intrebat si am o eroare bagamias pula");

        await message.channel.send({ //await sending message
            files: [{
                attachment: body.message,
                name: "dog.png"
            }]
        }).then(() => msg.delete()); //after message sent delete ...generating... message
    }
}