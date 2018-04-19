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

client.on('message', message =>{
const demande = {
  "url": "",
  "color": 2977512,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/icons/435480025110806548/c36bdd0f7f791094feb222a7d859f0b3.png",
    "text": ""
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": message.author.username + " a fait une demande d'emplois : ",
      "value": message + "",
      "inline": false
    }
  ]
};

	if (message.content.toLocaleLowerCase().includes("!demande")) {
		if(message.author.bot) return;
		message.channel.send(` ${member} ta demande a été prise en compte, tu vas être contacté par un recruteur.`);
		message.delete()
		client.channels.get('436532485518655498').send({embed: demande})
	}		
});

