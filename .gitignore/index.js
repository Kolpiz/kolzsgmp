const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)


client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","Esclave du grand maître");
const channel = member.guild.channels.find("name", "allishere").send(`Wesh ${member.user}, t'es maintenant l'esclave du grand maître.`)
member.addRole(role)
  
var Empire = client.guilds.get(message.guild.id).roles.find("name", "Empire");
var Révolution = client.guilds.get(message.guild.id).roles.find("name", "Révolution");

if(message.content.toLocaleLowerCase() == ("/empire")){
 message.channel.send(`Tu fais partis de l'empire, tu as choisis ton camp !`);
 message.guild.member(message.author).addRole(Empire);
 message.guild.member(message.author).removeRole(Révolution);
 }

 if(message.content.toLocaleLowerCase() == ("#princesse")){
 message.channel.send(`Tu fais partis de la révoltuion ! `);
 message.guild.member(message.author).addRole(Révolution);
 message.guild.member(message.author).removeRole(Empire);
 }
  
  
  
});
