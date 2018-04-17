const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "!";

client.login(token)

client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","Chomeur");
const channel = member.guild.channels.find("name", "acceuil").send(`Bienvenue sur MineEmplois ${member.user} !`)
member.addRole(role)
});

