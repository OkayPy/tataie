const { findError } = require("../../../utils/othererrors.js");

module.exports = {
    config: {
        name: "helpmsg",
        usage: "$helpmsg <id eroare>",
        description: "informatii despre eroare",
        permissions: "none",
        aliases: ["error"]
    },
    run: async (bot, message, args) => {
        let id = args[0];
        if (!id) return message.channel.send("baga idu erorri");
        
        let fix = findError(id);
        message.channel.send(fix);
    }
}