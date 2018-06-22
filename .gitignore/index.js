// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 

client.on("message", message => {


let roleID = "448818258968182795";
let membersWithRole = message.guild.roles.get(roleID).members;

if (message.content.includes("test")) {
membersWithRole.forEach(member => { member.send('test') });
}

});

client.login(token)









