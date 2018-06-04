const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)

client.on("message", message => { 
let argument = message.content.split("/clear").slice(1)
if(!argument) return message.channel.send("Merci d'indiquer de respecter le modèle suivant : ``/clear ( nombre de 0 à 100)``").then(m => m.delete(20000))
var person = message.member.permissions
function dot() {
message.channel.bulkDelete(argument);
};
function doNot() {
message.channel.send(" ").then(m => m.delete(20000));
};
person.has("MANAGE_MESSAGES") ? dot() : doNot();
 });

