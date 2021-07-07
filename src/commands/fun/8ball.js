const { fullHelp } = require("../../../utils/usage"); //good help message

module.exports = {
    config: {
        name: "8ball",
        usage: "$8ball <question>",
        description: "Get a cheesy answer to a question",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        if (args[0] == "help") { 
            let embed = fullHelp(bot, "8ball");
            return message.channel.send(embed);
        }
        let cmd = message.content.split(" ")[0];
        if(!args[2]) return message.channel.send(`pune o intrebare. \n sintaxa comezii: ${cmd} (intrebare)`);
        //questions should be at least 3 words long

        let replies = ["da.", "nu.", "nush coaie.", "mai taziu ca nam chef acuma!", "refuz", "nu, tactu ala ciung haha", "asta a zis si ma-ta", "asa se zice pe la mine prin sat", `${message.author.username}, esti un bot`, "sunt ocupat sa dau in mata", "nu prea"];
        let result = Math.floor((Math.random() * replies.length)); 
        //get random number between 0 and the length of the array

        return message.channel.send(replies[result]);
    }
}