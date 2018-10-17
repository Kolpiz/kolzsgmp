const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = ".";

client.on("ready", () => {
	client.user.setPresence({ game: { name: 'Parks-Mc Community', type: 0}});
});


client.login(token)

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name", "👋bienvenue").send(`Bienvenue chez les CoasterFans ${member.user} !`)
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', "👋bienvenue").send(` **${member.user.username}** est parti de chez les CoasterFans !`);
});

client.on('message', message =>{
    
if (message.content.startsWith(prefix + 'annonce')) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
let args = message.content.split(' ')
args.shift()
message.channel.send(args.join(' '))
    }
 
    if (message.content.startsWith('.kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Kick.').then(() => {
            message.channel.send(`Tu as kick **${member.user.username}** !`);
            message.delete()
          }).catch(err => {
            message.author.send("Tu n'as pas la permission de kick de joueur");
            console.error(err);
          });
        } else {
          message.author.send('Erreur, impossible de kick ce joueur.');
        }
      } else {
        message.author.send('Merci de mentionner un joueur !');
      }
    }

   if (message.content.startsWith('.ban')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: 'RIP lui.',
            }).then(() => {
              message.channel.send(`Tu as ban **${member.user.username}** !`);
              message.delete()
            }).catch(err => {
              message.reply("Tu n'as pas la permission de ban de joueur");
              console.error(err);
            });
          } else {
            message.reply('Erreur, impossible de ban ce joueur.');
          }
        } else {
          message.author.send('Merci de mentionner un joueur !');
        }
      }
  
});
