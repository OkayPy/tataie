require("./error"); //this file checks that all modules are installed, etc.
const logger = require("../utils/logger"); //better console logging
const { Client, Collection } = require("discord.js");
const bot = new Client(); //creates the Discord Client
const data = require("./loaders/reader"); //this returns data user entered in botconfig file




// Requires Manager from discord-giveaways
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;






["aliases", "commands"].forEach(x => bot[x] = new Collection()); //bot.aliases, bot.commands = Discord Collections
["console", "command", "event"].forEach(x => require(`../handlers/${x}`)(bot)); //run all of these files with param bot

logger.log("Successfully loaded other files.");
bot.login(data.token); //login with the bot token defined in botconfig file