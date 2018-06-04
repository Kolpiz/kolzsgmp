// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 

client.login(token)

client.on("message", message => { 

let argument = message.content.split("/clear").slice(1)
var person = message.member.permissions
function dot() {
message.channel.bulkDelete(argument);
};
function doNot() {
message.channel.send(" ").then(m => m.delete(20000));
};
person.has("MANAGE_MESSAGES") ? dot() : doNot();

 });
