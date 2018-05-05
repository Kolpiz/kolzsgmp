const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)


client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","Esclave du grand maître);
const channel = member.guild.channels.find("name", "allishere").send(`Wesh ${member.user}, t'es maintenant l'esclave du grand maître.`)
member.addRole(role)
});
