// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 
client.on("ready", () => {
client.user.setPresence({ game: { name: ' /help ', type: 0}}); // Jeux au quel il joue
console.log('|Le bot est en ligne.|'); // Message sur le console indiquant qu'il est prêt à l'utilisation
const onBot = {
  "title": "BOT EN LIGNE",
  "url": "",
  "color": 1697049,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": ""
  },
};
client.channels.get('424338436560781313').send({embed: onBot})
});

client.login(token)

// Message de bienvenue quand quelqu'un arrive sur discord
client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","--=[Visiteur]=--");
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user}.`)
member.addRole(role)
});

// Utilisateur qui vient d'arrivé, mentionné sur le salon #règlement
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name", "reglement");
channel.send(`${member.user}`)
    .then(message =>  message.delete())
});

// Message de départ quand quelqu'un quitte le discord
client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'accueil').send(` ${member.user} a quitté le discord de DreamsCraft.`);
});

// Command HELP
client.on('message', message =>{
const help = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Pour toute autres demande, le staff de DreamsCraft se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Toutes mes commandes commencent par " / " : ',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "``/help``",
      "value": "``Affiche les commandes du DreamsCraft BOT.``",
      "inline": false
    },
    {
      "name": "``/dc``",
      "value": "``Donne les informations concernant le serveur notamment l'ip.``",
      "inline": false
    },
    {
      "name": "``/soft``",
      "value": "``Donne la date de la prochaine Soft-Opening et ses informations.``",
      "inline": false
    },
    {
      "name": "``/ouverture``",
      "value": "``Donne la date de l'ouverture officielle du serveur.``",
      "inline": false
    },
    {
      "name": "``/attractions``",
      "value": "``Donne la liste complète des attractions ouvertes.``",
      "inline": false
    },
    {
      "name": "``/spectacles``",
      "value": "``Donne les horaires des prochains spectacles.``",
      "inline": false
    },  
	{
      "name": "``/partenaires``",
      "value": "``Donne la liste de nos partenaires officiels. Pour plus d'information utilisez /(Nom du partenaire) !``",
      "inline": false
    },
    {
      "name": "``/sortie``",
      "value": "``Donne la date et les partcipants de la prochaine sortie organisé par Loulouemerick & Dremas92.``",
      "inline": false
    },
	{
      "name": "``/avis``",
      "value": "``Permet de donner son avis sur le serveur !``",
      "inline": false
    },
	{
      "name": "``/suggestion``",
      "value": "``Permet de faire part d'une suggestion au staff !``",
      "inline": false
    },
	 {
      "name": "``/version``",
      "value": "``Permet de connaître ma derrnière version et mes derniers ajouts !``",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/help")){
 message.channel.send({embed: help});
 }

// Command HelpStaff
const helpstaff = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Pour toute autres demande, Natthh se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Commande uniquement réservé aux staffs :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "``[MAINTENANCE] /clear (nombre)``",
      "value": "``Efface le nombre de message indiqué dans la commande.``",
      "inline": false
    },
    {
      "name": "``/annonce (message)``",
      "value": "``Permet de faire parler le bot. ( Permission ADMIN obligatoire )``",
      "inline": false
    },
    {
      "name": "``/mute (membre) (raison) ``",
      "value": "``Permet de muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``/unmute (membre) (raison) ``",
      "value": "``Permet de dé-muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``/kick (membre) (raison) ``",
      "value": "``Permet de kick un membre du discord.``",
      "inline": false
    },
	{
      "name": "``/ban (membre) (raison)``",
      "value": "``Permet de ban un membre du discord.``",
      "inline": false
    }
  ]
};

if (message.content.toLocaleLowerCase() == "/helpstaff") {
if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
message.channel.send({embed: helpstaff})
}

// Commandes diverse écrite du bot :
// Commande des partenaires :
if(message.content.toLocaleLowerCase() == ("/partenaires")){
message.reply("Voici la liste des serveurs partenaires de DreamsCraft : UniversParks  - McDreams - DreamsWorld ! Pour plus d'information sur un serveur en question, utilisez /(Nom du partenaire) !");
}

// Commande d'information sur le serveur :
if(message.content.toLocaleLowerCase() == ("/dc")){
message.reply("L'ip de DreamsCraft est : DreamsCraft.minecraft-mania.fr en version 1.12.2 de minecraft premium !");
}
	
// Commande de la prochaine soft
if(message.content.toLocaleLowerCase() == ("/soft")){
message.reply("Il n'y a pas de date pour la prochaine Soft-Opening.");
}
	
// Commande d'ouverture du serveur
if(message.content.toLocaleLowerCase() == ("/ouverture")){
message.reply("Il n'y a pas encore de date d'ouverture.");
}
	
// Commande des prochains spectacles 
if(message.content.toLocaleLowerCase() == ("/spectacles")){
message.reply('Les horaires des prochains spectacles ne sont pas encore programmé.');
}

// Commande des attractions ouvertes
if(message.content.toLocaleLowerCase() == ("/attractions")){
message.reply("Les attractions ouvertes sont : ``Les Tapis Volants d'Aladin`` - `` Rc Racer`` - `` Zig-Zag Spin `` - ``Crush Coaster`` - `` Toy Soldiers Parachute Drop `` !");
}

// Commande de la version du bot
if(message.content.toLocaleLowerCase() == ("/version")){
message.reply("Je suis actuellement en version ``3.0`` ! Mes derniers ajouts sont des commandes de modération & un recodage entiers !  ");
}

// Commande de Bonjour
if (message.content.toLocaleLowerCase().includes("bonjour") || message.content.toLocaleLowerCase().includes("bjr") || message.content.toLocaleLowerCase().includes("coucou") || message.content.toLocaleLowerCase().includes("cc") ||  message.content.toLocaleLowerCase().includes("salut") || message.content.toLocaleLowerCase().includes("slt")) {
if(message.author.bot) return;
message.channel.send("Bonjour !")
}

if (message.content.toLocaleLowerCase().includes("bonsoir") || message.content.toLocaleLowerCase().includes("bsr")) {
if(message.author.bot) return;
message.channel.send(" Bonsoir !")
}
	
// Commande de la prochaine sortie du staff de DreamsCraft
if(message.content.toLocaleLowerCase() == ("/sortie")){
message.reply("La prochaine sortie à DisneyLand Paris organisé par Loulouemerick se déroule le 14 juin ! Vous voulez participer ? Contactez Loulouemerick par MP ! Participants actuels : Loulouemerick.");
}	
	
// Tri des insultes automatique 
	
const insultelogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : INSULTE "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase().includes("pute") || message.content.toLocaleLowerCase().includes("encule") || message.content.includes("fdp") || message.content.toLocaleLowerCase().includes("batard") || message.content.toLocaleLowerCase().includes("ta race") || message.content.toLocaleLowerCase().includes("ta mère") || message.content.includes("ntm") || message.content.toLocaleLowerCase().includes("salop") || message.content.toLocaleLowerCase().includes("bougnoule") || message.content.toLocaleLowerCase().includes("connard") || message.content.toLocaleLowerCase().includes("ntm")) {
if(message.author.bot) return;
message.reply("Merci d'éviter ce genre de langage !");
message.delete()
client.channels.get('411217787785183245').send({embed: insultelogs})
}	

	
// Archive des messages

const messagelogs = {
  "url": "",
  "color": 15853885,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : MESSAGE "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.includes("")) {
if(message.author.bot) return;
client.channels.get('414418438614941698').send({embed: messagelogs})
}				

	
// Filtre Anti-Pub	
	
const publogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : PUB "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase().includes("waltcraft") || message.content.toLocaleLowerCase().includes("magiccraft") || message.content.toLocaleLowerCase().includes("disneypixel") || message.content.toLocaleLowerCase().includes("walt disney imagineer") || message.content.toLocaleLowerCase().includes("dlpparks") || message.content.toLocaleLowerCase().includes("magic of disney") || message.content.toLocaleLowerCase().includes("disney imagineer") || message.content.toLocaleLowerCase().includes("world of disney")) {
if(message.author.bot) return;
message.reply("Merci d'éviter la pub ! ");
message.delete()
client.channels.get('411217787785183245').send({embed: publogs})
}		
	
	
// Archive avis

const avislogs = {
  "url": "",
  "color": 1284672,
    "timestamp": new Date(),
    "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : AVIS"
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": message.author.username + " a donné son avis : ",
      "value": message + "",
      "inline": false
    }
  ]
};
	
if (message.content.toLocaleLowerCase().includes("/avis")) {
if(message.author.bot) return;
message.reply("Merci d'avoir donné ton avis ! ");
message.delete()
client.channels.get('415068910300430347').send({embed: avislogs})
}		
	
	
// Archive suggestions	
	
const suggestionlogs = {
  "url": "",
  "color": 2977512,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : SUGGESTION"
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": message.author.username + " a fait part d'une nouvelle suggestion : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase().includes("/suggestion")) {
if(message.author.bot) return;
message.reply("Merci pour cette suggestion ! Ton idée sera examiné par le staff de DreamsCraft !");
message.delete()
client.channels.get('415550993267163156').send({embed: suggestionlogs})
}
	
// Commande du partenaire McDreams

  const mcdreams = {
  "url": "http://mcdreams.livehost.fr/index.php",
  "color": 4420817,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/365548464525934592/426488906809212930/McDprofilePintemps.png",
    "text": "Nous remercions McDreams de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/365548464525934592/426488906809212930/McDprofilePintemps.png"
  },
  "image": {
      "url": "https://cdn.discordapp.com/attachments/322470437722521600/399179491726983179/2018-01-06_13.34.58.png"
    },
  "author": {
    "name": "McDreams :",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/attachments/365548464525934592/426488906809212930/McDprofilePintemps.png"
  },
  "fields": [
    {
      "name": "Nom : McDreams.",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : DisneyLandParis.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Directeurs : Dremas92 & TheSkinter.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Fermée.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : McDreams.boxtoplay.com en 1.12. ( Une version premium est nécéssaire.)",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Facebook :  https://www.facebook.com/McDreamsOfficiel/ ",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : https://discord.gg/Se4k9Pw",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/mcdreams")){
 message.channel.send({embed: mcdreams});
 }	
	
 
// Commande du partenaire UniversParks
	
	const universparks = {
  "url": " ",
  "color": 10030606,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png",
    "text": "Nous remercions UniversParks de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png"
  },
  "image": {
      "url": "https://cdn.discordapp.com/attachments/366587401528803330/417291573215363073/Sans_titre.png"
    },
  "author": {
    "name": "UniversParks :",
    "url": "",
    "icon_url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png"
  },
  "fields": [
    {
      "name": "Nom : UniversParks.",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : Parc custom et reproduction de parc réel. ",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Fondateurs : McMagical_ (Theooo_) & waterpoloman.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Ouvert.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : UniversParks.boxtoplay.com en 1.12 ( Une version premium est nécéssaire )",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Facebook : https://fr-fr.facebook.com/UniversParks/",
      "value": "--------------------",
      "inline": false
    },
	  {
      "name": "Twitter : https://twitter.com/UniversParks",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : https://discord.gg/mbT6QzG",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/universparks")){
 message.channel.send({embed: universparks});
 }

// Commande du partenaire DreamsWorld
	
	const dreamsworld = {
  "url": " ",
  "color": 10457828,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/397387397081595904/421037147689058325/LogoDW.jpg",
    "text": "Nous remercions DreamsWorld de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/397387397081595904/421037147689058325/LogoDW.jpg"
  },
  "image": {
      "url": "https://cdn.discordapp.com/attachments/341956374667853824/421081591474028550/2018-02-04_20.59.09.png"
    },
  "author": {
    "name": "DreamsWorld :",
    "url": "https://dreamsworldmc.webnode.fr/",
    "icon_url": "https://cdn.discordapp.com/attachments/397387397081595904/421037147689058325/LogoDW.jpg"
  },
  "fields": [
    {
      "name": "Nom : DreamsWorld",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : Parcs d'attractions customisés et mini-jeux. ",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Fondateurs : AlexEpMack.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Fermé.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : Non disponible.",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Facebook : https://www.facebook.com/dreamsworldmc/",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : https://discord.gg/EXNdj9A",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/dreamsworld")){
 message.channel.send({embed: dreamsworld});
 }
});
 
 client.on("message", (message) => { 
 var member= message.mentions.members.first();
	const kicklogs = { 
  "url": "",
  "color": 15425036,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : SANCTION "
  },
  "thumbnail": {
    "url": ""
  },
  "fields": [
	{
      "name": message.author.username + " a kick un joueur :",
      "value": message + " ",
      "inline": false
    }
  ]
};
	
if (message.content.toLocaleLowerCase().includes("kick")) {
	
	 if (!message.member.hasPermission('KICK_MEMBERS'))
return message.channel.send("Tu n'as pas la permissions !");
	
var member= message.mentions.members.first();
        member.kick().then((member) => {
client.channels.get('424991281458970645').send({embed : kicklogs})
        }).catch(() => {
            message.channel.send("Tu n'as pas la permission !");
        });
    }
	 
	const banlogs = { 
  "url": "",
  "color": 16711680,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : SANCTION "
  },
  "thumbnail": {
    "url": ""
  },
  "fields": [
	{
      "name": message.author.username + " a bannis un joueur :",
      "value": message + " ",
      "inline": false
    }
  ]
};

	
if (message.content.toLocaleLowerCase().includes("/ban")) {
	
	 if (!message.member.hasPermission('BAN_MEMBERS'))
return message.channel.send("Tu n'as pas la permissions !");

var member= message.mentions.members.first();

        member.ban().then((member) => {
client.channels.get('424991281458970645').send({embed : banlogs})
        }).catch(() => {
            message.channel.send("Tu n'as pas la permission ! ");
        });
    }
	
	const mutelogs = { 
  "url": "",
  "color": 1349919,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : SANCTION "
  },
  "thumbnail": {
    "url": ""
  },
  "fields": [
	{
      "name": message.author.username + " a mute un joueur :",
      "value": message + " ",
      "inline": false
    }
  ]
};

if (message.content.toLocaleLowerCase().includes("/mute")) {

	 if (!message.member.hasPermission('MANAGE_ROLES'))
return message.channel.send("Tu n'as pas la permissions !");
	
var muteRole = client.guilds.get(message.guild.id).roles.find("name", "Mute"); 
var member= message.mentions.members.first();
var Visiteur = client.guilds.get(message.guild.id).roles.find("name", "--=[Visiteur]=--"); 

 member.addRole(muteRole).then((member) => {
	member.removeRole(Visiteur)
client.channels.get('424991281458970645').send({embed: mutelogs})

        }).catch(() => {
		
            message.channel.send("Tu n'as pas la permission ! ");
			
        });
    }
	
	const unmutelogs = { 
  "url": "",
  "color": 1349919,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Type : SANCTION "
  },
  "thumbnail": {
    "url": ""
  },
  "fields": [
	{
      "name": message.author.username + " a dé-mute un joueur :",
      "value": message + " ",
      "inline": false
    }
  ]
};
	
	if (message.content.toLocaleLowerCase().includes("/unmute")) {

	 if (!message.member.hasPermission('MANAGE_ROLES'))
return message.channel.send("Tu n'as pas la permissions !");
	
var muteRole = client.guilds.get(message.guild.id).roles.find("name", "Mute"); 
var member= message.mentions.members.first();
var Visiteur = client.guilds.get(message.guild.id).roles.find("name", "--=[Visiteur]=--"); 


    
	member.removeRole(muteRole).then((member) => {
	member.addRole(Visiteur)
client.channels.get('424991281458970645').send({embed: unmutelogs})


        }).catch(() => {
		
            message.channel.send("Tu n'as pas la permission ! ");
			
        });
    }

 if (message.content.startsWith(prefix + 'annonce')) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
let args = message.content.split(' ')
args.shift()
message.channel.send(args.join(' '))
    }
	 	 
 });
// Fin du Code

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


// Fin du Code


