const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = ".";

client.on("ready", () => {
	client.user.setPresence({ game: { name: 'Parks-Mc Community 2.0', type: 0}});
});


client.login(token)

client.on('guildMemberAdd', member => {

	    const guild = member.guild;

const channel = member.guild.channels.find(channel => channel.name === "🖐-bienvenue").send(`Bienvenue ${member.user} sur **🔴🔷Parks-Mc Community 2.0🔷🔴**🎉🤗 ! Nous sommes maintenant **${guild.memberCount}** !`);

       let guest = member.guild.roles.get("558726858347380785");
        member.addRole(guest).catch(console.error);
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find(channel => channel.name === "🖐-bienvenue").send(` **${member.user.username}** a quitté notre communautée! 😯 `);
});


client.on('message', message =>{
	
	    if (message.content.startsWith(prefix + 'iclear')) {
   let argument = message.content.split(" ").slice(1)
   const amount = parseInt(argument[0]);
   if (isNaN(amount)) {
       return message.channel.send(`Merci de mettre un nombre ! ${message.author}`).then(m => m.delete(60000));
   
      if(!argument) return message.channel.send("Merci de mettre un nombre !").then(m => m.delete(20000))
    
        message.channel.bulkDelete(amount);
        message.channel.send(`**${amount}** messages ont été supprimés ${message.author}.`).then(m => m.delete(60000));
      }
		    
      function doNot() {
        message.channel.send(`Tu n'as pas la permission ! Quel dommage :sob: ${member.author}`).then(m => m.delete(60000));
     };
    }
	    
	
});
    
client.on('message', message =>{
	
if(message.content.toLocaleLowerCase() == ("!news")){
	
	let news = message.guild.roles.get("559022659053027360");
	message.author.send("Merci d'avoir prit le grade News !\n \n_La direction de Parks-Mc Community_")
	message.delete()
	message.guild.member(message.author).addRole(news);	
}
	
if(message.content.toLocaleLowerCase() == ("!stop-news")){
	
	let member = message.member
	let news = message.guild.roles.find(r => r.name === "{NEWS}");
	message.author.send("Désolé du dérangement occasionné !\n \n_La direction de Parks-Mc Community_")
	message.delete()
	member.removeRole(news).catch(console.error);
	
}
	
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
  
	
    if (message.content.startsWith(prefix + 'jeu')) {
        let args = message.content.split(' ')
        args.shift()
        message.channel.send(args.join(' '))
        client.user.setPresence({ game: { name: args.join(' '), type: 0}});
            }
	
	  if (message.content.startsWith(prefix + 'avatar') && (message.content.includes("https://"))) {
        const argsjeu = message.content.split(' ')
        argsjeu.shift()
        client.user.setAvatar(argsjeu.join(' '));
        message.channel.send("Mon avatar vient d'être changé !")
    } else if (message.content.startsWith(prefix + 'avatar') && (!message.content.includes("https://"))) {
    message.channel.send("Tu dois inséré un lien commencant par https:// !")
    }

    if (message.content.toLocaleLowerCase().includes(".mute")) {
        if (!message.member.hasPermission('MANAGE_ROLES'))
     return message.channel.send("Tu n'as pas la permissions !");
     var muteRole = client.guilds.get(message.guild.id).roles.find("name", "{-MUTE-}"); 
     var member = message.mentions.members.first();
     if (!member.roles.has(muteRole.id)) {

             member.addRole(muteRole).then((member) => {
                 message.channel.send(`**   ${member}** est désormais mute.`)
             }).catch(() => {
                 message.channel.send("Tu n'as pas la permission ! ");
             });
     }else {
         message.delete();
         message.channel.send("Ce joueur est déjà mute !")
     }
           }


           if (message.content.toLocaleLowerCase().includes(".unmute")) {
          
            if (!message.member.hasPermission('MANAGE_ROLES'))
         return message.channel.send("Tu n'as pas la permissions !");
           
         var member = message.mentions.members.first();
         var muteRole = client.guilds.get(message.guild.id).roles.find("name", "{-MUTE-}"); 

         if (member.roles.has(muteRole.id)) {
         
                message.delete();
                 member.removeRole(muteRole).then((member) => {
                     message.channel.send(`**${member}** n'est plus mute.`)
                      
                 }).catch(() => {
             
                     message.channel.send("Tu n'as pas la permission ! ");
               
                 });
             } else {
                message.delete();
                 message.channel.send("Ce joueur n'est pas mute !")
             }
            }



  
});
