const Discord = require("discord.js");
let config = require("../src/loaders/reader"); //get data from botconfig file

function noPerms(message, perm) {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("FARA PERMISIUNI")
        .setColor(config.red)
        .addField("N-AI SUFICIENTI PARINTI SI PERMISIUNI", perm);
    message.channel.send(embed).then(m => m.delete(4000));
}

function equalPerms(message, user, perms) {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("eroare")
        .addField(`${user.user.username} are permisiuni`, perms);
    message.channel.send(embed).then(m => m.delete(4000));  
}

function botuser(message, command) {
    let embed = new Discord.RichEmbed()
        .setTitle("eroare")
        .setDescription(`Nu poti ${command} la un bot`)
        .setColor(config.red);
    message.channel.send(embed).then(m => m.delete(4000));
} 

function cantfindUser(channel) {
    let embed = new Discord.RichEmbed()
        .setTitle("eroare")
        .setDescription("nu am gasit useru fututi rasa matii")
        .setColor(config.red);
    channel.send(embed).then(m => m.delete(3000));
}

function noRole(channel) {
    let embed = new Discord.RichEmbed()
        .setTitle("eroare")
        .setDescription("nu e niciun rol cu numele ala")
        .setColor(config.red);
    channel.send(embed).then(m => m.delete(3000));
}

function lack(channel, perm) {
    let embed = new Discord.RichEmbed()
        .setTitle("nam destule permisiuni mortii matii")
        .setColor(config.red)
        .addField("nu am permisiune", perm);
    channel.send(embed).then(m => m.delete(3000));
}

function notBanned(channel, id) {
    let embed = new Discord.RichEmbed()
        .setTitle("eroare")
        .setDescription(`useru cu ID ${id} nu e banat.`)
        .setColor(config.red);
    channel.send(embed).then(m => m.delete(3000));
}

module.exports = {
    noPerms,
    equalPerms,
    botuser,
    cantfindUser,
    noRole,
    lack,
    notBanned
}
