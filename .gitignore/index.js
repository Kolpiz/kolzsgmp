const discord = require('discord.js');
client = new discord.Client();
const token = (process.env.TOKEN);
const talkedRecently = new Set()
var prefix = "/"; 
const today = new Date();

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


client.on('guildMemberAdd', member => {

	let role = member.guild.roles.find("name","--=[Visiteur]=--");
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user} ! Pour recevoir ton grade visiteur, merci d'aller accepter le réglement.`)
	
});


client.on('guildMemberAdd', member => {

const channel = member.guild.channels.find("name", "règlement");
	channel.send(`${member.user}`)
    .then(message =>  message.delete())
	
});


client.on('guildMemberRemove', member => {

const channel = member.guild.channels.find('name', 'départ').send(`**${member.user.username}** a quitté le discord de DreamsCraft.`);

});


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
    "name": 'Voici toutes mes commandes utilisables sur le discord de DreamsCraft : ',
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
    }
  ]
};
		
	if (message.content.toLocaleLowerCase() === `/help`) {
	if (message.channel.type == 'dm') return;
	message.author.send({embed: help});
    message.channel.send(`Mes commandes utilisables sur ce discord vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(150000))
    .catch(error => {
    });
}
	

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
      "name": "``[MAINTENANCE] /annonce (message)``",
      "value": "``Permet de faire parler le bot. ( Permission ADMIN obligatoire )``",
      "inline": false
    },
    {
      "name": "``[MAINTENANCE] /mute (membre) (raison) ``",
      "value": "``Permet de muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``[MAINTENANCE] /unmute (membre) (raison) ``",
      "value": "``Permet de dé-muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``[MAINTENANCE] /kick (membre) (raison) ``",
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

	if (message.content.toLocaleLowerCase() === `/helpstaff`) {
	if (message.channel.type == 'dm') return;
	 message.delete()
	if (!message.member.hasPermission('MANAGE_MESSAGES'))
	message.author.send({embed: helpstaff});
    message.channel.send(`Mes commandes spéciales staff utilisables sur ce discord vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(150000))
    .catch(error => {
    });
}

	if(message.content.toLocaleLowerCase() == ("/partenaires")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send("Voici la liste des serveurs partenaires de DreamsCraft : UniversParks  - McDreams ! Pour plus d'information sur un serveur en question, utilisez /(Nom du partenaire) !");
     message.channel.send(`Les informations sur les partenaires de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

if (message.content.startsWith(prefix + 'bot')) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
let args = message.content.split(' ')
args.shift()
message.channel.send(args.join(' '))
    }
		
	const dc = {
  "url": " ",
  "color": 12190976,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici les informations concernant DreamsCraft :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Minecraft nécessaire : Premium",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Version du serveur : 1.12.2",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip du serveur : DreamsCraft.minecraft-mania.fr",
      "value": "--------------------",
      "inline": false
    }
  ]
};
	

	if(message.content.toLocaleLowerCase() == ("/dc")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send({embed: dc});
	 message.channel.send(`Les informations concernant DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}
	
	const soft = {
  "url": " ",
  "color": 65535,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici les informations concernant la prochaine soft-opening DreamsCraft :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Prochaine soft opening : Indéterminé",
      "value": "--------------------",
      "inline": false
	   },{
	  "name": "Horaires de la soft opening : Indéterminé",
      "value": "--------------------",
      "inline": false
    }
  ]
};
	
	
	 if(message.content.toLocaleLowerCase() == ("/soft")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.channel.send(`Les informations concernant la prochaine soft-opening de DreamsCraft vous ont été envoyé en privé. ${message.author}`);
	 message.author.send({embed: soft})
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}
	
	const ouverture = {
  "url": " ",
  "color": 245820,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": "Voici les informations concernant l'ouverture de DreamsCraft :",
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Ouverture de DreamsCraft : Indéterminé",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Horaires de l'ouverture : Indéterminé",
      "value": "--------------------",
      "inline": false
    }
  ]
};
	
	if(message.content.toLocaleLowerCase() == ("/ouverture")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send({embed: ouverture});
	 message.channel.send(`Les informations concernant l'ouverture DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}
	
	const spectacles = {
  "url": " ",
  "color": 16754432,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici les informations concernant le prochain spectacle sur DreamsCraft :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Prochain spectacle : Indéterminé ",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Horaire du prochain spectacle : Indéterminé",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Lieu du prochain spectacle : Indéterminé ",
      "value": "--------------------",
      "inline": false
	}
  ]
};
	
	if(message.content.toLocaleLowerCase() == ("/spectacles")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send({embed: spectacles});
	 message.channel.send(`Les informations concernant les spectacles de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
     .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

	const attractions = {
  "url": " ",
  "color": 13514346,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici les informations concernant les attractions ouvertes sur DreamsCraft :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Les Tapis Volants d'Aladin - Land : Toon Studio",
      "value": "--------------------",
      "inline": false
    },{
	"name": "Crush Coaster - Land : Toon Studio",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Rc Racer - Land : Toy Story Playland",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Zig-Zag Spin - Land : Toy Story Playland",
      "value": "--------------------",
      "inline": false
	},{
	  "name": "Toy Soldiers Parachute Drop - Land : Toy Story Playland",
      "value": "--------------------",
      "inline": false
    }
  ]
};
	
	
	if(message.content.toLocaleLowerCase() == ("/attractions")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send({embed: attractions});
	 message.channel.send(`Les informations concernant les attractions de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

  
  if (message.content.startsWith("/notif")) {
    if (!message.member.hasPermission('MANAGE_ROLES'))
    return message.channel.send("Tu n'as pas la permissions !");
    message.delete()
    message.channel.send("@everyone")
     .then(sentMessage => sentMessage.delete(1000))
     .catch(error => {
     });
    }
  
  if (message.content.startsWith("/8ball")) {
	if (message.channel.type === "dm") return;
  if (message.channel.id !== '504394913979301888') return;

		var phrase = ["C'est certain !","Probablement.","Oui !","Je ne pense pas mais je ne suis pas sûre.","Demande à Dremas !","BIP - Je suis actuellement indisponible. _Mais si tu fait un don, peut être que... _","Mieux vaut ne pas te le dire.","Je te retourne la question.","Peut être.","Mes sources me disent que non","Mes sources me disent que non.","ok.","Oui, ! Oui Bien sûr !  En faite non, c'est faux.","Sûrement.","Bonne question !","Il fait beau dehors hyn..","Sûrement pas !","Oui avec deux grands N et un grand O !","Certainement.","Probablement pas.","Je suppose que cela est vrai."]
        message.channel.send((phrase[Math.floor(Math.random() * phrase.length)]) + ` ${message.author}`);
	  
  }
  
 
   if (message.content.toLocaleLowerCase() == ("/casino")) {
    if (message.channel.type === "dm") return;
    if (message.channel.id !== '505337666028437515') return;

const noel1 = ["🎅"]
const noel2 = ["⛄"]
const noel3 = ["❄"]
const noel4 = ["🎄"]
     
    var emotes = [noel1,noel2,noel3,noel4]
            
    var d1 = emotes[Math.floor(Math.random() * emotes.length)]
    var d2 = emotes[Math.floor(Math.random() * emotes.length)]
    var d3 = emotes[Math.floor(Math.random() * emotes.length)]

    if (talkedRecently.has(message.author.id)) {
      message.delete()
      message.channel.send("Tu ne peux jouer au casino qu'une fois toute les heures " + message.author + ` ! Merci d'attendre !`)
      .then(sentMessage => sentMessage.delete(150000))
      .catch(error => {
      });
	    
} else {

if (d1 == emotes[0] && d2 == emotes[0] && d3 == emotes[0]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[2] && d2 == emotes[2] && d3 == emotes[2]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[1] && d2 == emotes[1] && d3 == emotes[1]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[3] && d2 == emotes[3] && d3 == emotes[3]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else        
      message.channel.send(`Perdu ${message.author}, retente ta chance !`)
      
      message.delete()
      message.channel.send(`-------------------\r| ${d1} | ${d2} | ${d3} |\r-------------------`);
    
    
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 30000000);
}
  }
  
 
  
   if (message.content.toLocaleLowerCase() == ("/scasino")) {
    if (message.member.hasPermission('MANAGE_MESSAGES'))
     if (message.channel.type === "dm") return;
     
const noel1 = ["🎅"]
const noel2 = ["⛄"]
const noel3 = ["❄"]
const noel4 = ["🎄"]
     
    var emotes = [noel1,noel2,noel3,noel4]
            
    var d1 = emotes[Math.floor(Math.random() * emotes.length)]
    var d2 = emotes[Math.floor(Math.random() * emotes.length)]
    var d3 = emotes[Math.floor(Math.random() * emotes.length)]

    
if (d1 == emotes[0] && d2 == emotes[0] && d3 == emotes[0]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[2] && d2 == emotes[2] && d3 == emotes[2]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[1] && d2 == emotes[1] && d3 == emotes[1]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else
    if (d1 == emotes[1] && d2 == emotes[1] && d3 == emotes[3]) {
      message.channel.send(`Bravo ${message.author}, tu as gagné !`)
    } else        
      message.channel.send(`Perdu ${message.author}, retente ta chance !`)
      
      message.delete()
      message.channel.send(`-------------------\r| ${d1} | ${d2} | ${d3} |\r-------------------`);

 }
	   
	   
	const recrutement = {
    "url": " ",
    "color": 13514346,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
      "text": ""
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
    },
    "author": {
      "name": 'Voici les informations concernant les recrutements sur DreamsCraft :',
      "url": " ",
      "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
    },
    "fields": [
      {
        "name": "Guide : Fermé",
        "value": "--------------------",
        "inline": false
      },{
    "name": "Animateur : Fermé",
        "value": "--------------------",
        "inline": false
      },{
      "name": "Modérateur : Fermé",
        "value": "--------------------",
        "inline": false
      },{
      "name": "Développeur : Fermé",
        "value": "--------------------",
        "inline": false
      }
    ]
  };

	if(message.content.toLocaleLowerCase() == ("/recrutements")){
    if (message.channel.type == 'dm') return;
    message.delete()
    message.author.send({embed: recrutement});
    message.channel.send(`Les informations concernant les recrutements sur DreamsCraft vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(150000))
      .catch(error => {
      });
   }


	const sortie = {
  "url": " ",
  "color": 16708420,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Vous voulez participer ? Contactez Loulouemerick en privé !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici les informations concernant la prochaine sortie de Loulouemerick et Dremas92 :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "Lieu de la prochaine sortie : DisneyLand Paris ",
      "value": "--------------------",
      "inline": false
    },{
	  "name": "Date de la prochaine sortie : NON PROGRAMMÉ",
      "value": "--------------------",
      "inline": false
    }
  ]
};
	

	if(message.content.toLocaleLowerCase() == ("/sortie")){
	 if (message.channel.type == 'dm') return;
	 message.delete()
	 message.author.send({embed: sortie});
	 message.channel.send(`Les informations concernant la prochaine sortie de loulouemerick vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });

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
	 if (message.channel.type == 'dm') return;
	 if(message.author.bot) return;
	 message.delete()
	 client.channels.get('411217787785183245').send({embed: insultelogs})
	 message.channel.send(`Merci d'éviter ce genre de langage ! ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
	 });
	
}		
	
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
	 if (message.channel.type == 'dm') return;
	 if(message.author.bot) return;
	 client.channels.get('414418438614941698').send({embed: messagelogs})
}	
	
	
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
	 if (message.channel.type == 'dm') return;
	 if(message.author.bot) return;
	 message.delete()
	 client.channels.get('411217787785183245').send({embed: publogs})
	 message.channel.send(`Merci d'éviter la pub ! ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
	 });

}		

	 const args = message.content.slice(prefix.length).trim().split(/ +/g);

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
		if (args[1] !== undefined) {
		if(message.author.bot) return;
		message.channel.send(`Merci d'avoir donné ton avis ! ${message.author}`);
		message.delete()
		client.channels.get('415068910300430347').send({embed: avislogs})
	    .then(sentMessage => sentMessage.delete(150000))
	    .catch(error => {
		});
		} else {
		message.channel.send("Tu dois écrire quelques choses après la commande !")
		message.delete()
	    .then(sentMessage => sentMessage.delete(150000))
		.catch(error => {
		});		
		}
	}
	
	
		if (message.content.toLocaleLowerCase().includes("à sortie une nouvelle vidéo")) {
		 if (message.channel.id === '453218143507316746') {
		 client.channels.get('449973748054097921').send(`${message}`)
		}
		}

		if (message.content.toLocaleLowerCase().includes("")) {
      if (message.channel.id === '426446713419595778') {
      message.react("✅")
      message.react("❌")

     }
     }
    

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
          "value": message.content.substr(12) + "",
          "inline": false
        }
      ]
    };
     
	if (message.content.toLocaleLowerCase().includes("/suggestion")) {
      if(message.author.bot) return;
        message.channel.send(`Merci pour ta suggestion ! ${message.author}`)
	message.delete()
	client.channels.get('415550993267163156').send({embed: suggestionlogs})
        .then(sentMessage => sentMessage.delete(150000))
        .catch(error => {
        });
            }

    
         
      const mcdreams = {
      "url": "http://mcdreams.livehost.fr/index.php",
      "color": 4420817,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/347050495392874507/463712025135022086/540677fdea010b286fc35175074dd35b.png",
        "text": "Nous remercions McDreams de nous faire confiance !"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/347050495392874507/463712025135022086/540677fdea010b286fc35175074dd35b.png"
      },
      "image": {
          "url": "https://cdn.discordapp.com/attachments/334433689721372694/463821976776081408/McDFB8.png"
        },
      "author": {
        "name": "McDreams :",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/attachments/347050495392874507/463712025135022086/540677fdea010b286fc35175074dd35b.png"
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
          "name": "Ip / Version : McDreams.boxtoplay.com en 1.12.  \n( Une version premium est nécéssaire.)",
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
      if (message.channel.type == 'dm') return;
      message.delete()
      message.author.send({embed: mcdreams});
      message.channel.send(`Les informations concernant McDreams vous ont été envoyé en privé. ${message.author}`)
        .then(sentMessage => sentMessage.delete(150000))
        .catch(error => {
        });
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
          "url": "https://cdn.discordapp.com/attachments/333644419171614722/463679249220501514/Partner.png"
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
          "name": "Fondateurs : Theooo & Mathieuu.",
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
      if (message.channel.type == 'dm') return;
      message.delete()
      message.author.send({embed: universparks});
      message.channel.send(`Les informations concernant Universparks vous ont été envoyé en privé. ${message.author}`)
        .then(sentMessage => sentMessage.delete(150000))
        .catch(error => {
        });
     }
  
      });
   
        const setupCMD = "/reglement"
        let initialMessage = "Mario migo";
        const roles = ["--=[Visiteur]=--"];
        const reactions = ["✅"];

        if (roles.length !== reactions.length) throw "Prolbème wistone.";

function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`
    :straight_ruler:Règlement Discord/Minecraft : :black_nib:️DreamsCraft:closed_book:
      :red_circle:- Vous devez être respectueux et courtois entre vous.
      :red_circle:-Les glitchs sur le serveur est strictement interdit ! Sous peine de bannissement d'un mois. (Sauf si vous révéler ou ce situe le lieu de glitch !)
      :red_circle:- Le spam et le flood sont interdits.
      :red_circle:- Les insultes, le racisme ou toute autre forme de paroles/messages qui pourrait faire du mal mentalement à quelqu'un sont interdites.
      :red_circle:- L'usurpation d'identité est interdite.
      :red_circle:-Le contenu pornographique et strictement interdit
      :red_circle:- Toute menace, par n'importe quel moyen est interdite.
      :red_circle:- Toute pub, par n'importe quel moyen est interdite (Sauf acceptation par un membre du staff).
      :red_circle:- Nous vous demandons d'être un minimum mature dans les salon vocaux mis à votre disposition.
      :lock:Les sanctions vous seront attribuées en fonction de vos manquements au règlement, elle pourra aller du simple avertissement au ban définitif.:lock:
      :newspaper2:* Il est important de noter que ce n’est pas parce que un staff vous inflige une sanction, qu’il vous en veut personnellement.
      :newspaper2:* Il est également important de noter que nous nous réservons le droit de modifier le règlement à tout moment.
                                                           :exclamation:️ [staff] Tout départ du staff est définitif :exclamation:️
                                         **Clique sur l'émojis " ✅ " pour avoir le rôle** **"${role}"** **et pouvoir avoir accès à tout les channels !**
                                                                                      [@everyone]`); 
    return messages;
}


client.on("message", message => {
  
    if (message.author.id == 281076319708774400 && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                }
            }
        }
        })
 
    }   
  });

    client.on("message", message => {


    const mutelogs = { 
      "url": "",
      "color": 1349919,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
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
    
            member.addRole(muteRole).then((member) => {
        
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
              "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
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
          
                  member.removeRole(muteRole).then((member) => {
              
          client.channels.get('424991281458970645').send({embed: unmutelogs})
          
                  }).catch(() => {
              
                      message.channel.send("Tu n'as pas la permission ! ");
                
                  });
              }
    

  });

client.on('message', message =>{
 
  if (message.content.includes("")) {
    if (message.channel.type == 'dm'){
 if(message.author.bot) return;
   client.users.get("281076319708774400").send(`${message.author}` +"** -> **" +" `` "+ `${message}` +"``") // Natthh
   client.channels.get("515200674074460180").send(`${message.author}` +"** -> **" +" `` "+ `${message}` +"``") // Natthh
}
  }
  
 if (message.content.toLocaleLowerCase() === `/case 5`) {		 
 if (message.channel.type == 'dm') return;
 if (message.channel.id !== '518190701050069012') return;
    if (today.getDate() === 5 && today.getMonth() === 11) {
    message.delete()
    message.channel.send(`Tu viens d'ouvir la case n°5 de ton calendrier ! ${message.author}`)
    message.author.send("Voici le contenue de la cinquième case de votre calendrier : Mon cinquième est (encore) ``l``. Vous remportez également un Kinder.")
    client.channels.get('518188746219192320').send(`${message.author} à ouvert la case n°5 !`)

    }
  } 
  
    if (message.content.toLocaleLowerCase() === `/case 13`) {		 
 if (message.channel.type == 'dm') return;
 if (message.channel.id !== '518190701050069012') return;
    if (today.getDate() === 13 && today.getMonth() === 11) {
    message.delete()
    message.channel.send(`Tu viens d'ouvir la case n°13 de ton calendrier ! ${message.author}`)
    message.author.send("Voici le contenue de la treizième case de votre calendrier : Mon treizième est ``g``. Vous ne remportez rien d'autre.")
    client.channels.get('518188746219192320').send(`${message.author} à ouvert la case n°13 !`)

    }
  }  
  
  
    if (message.content.toLocaleLowerCase() === `/case 12`) {		 
 if (message.channel.type == 'dm') return;
 if (message.channel.id !== '518190701050069012') return;
    if (today.getDate() === 12 && today.getMonth() === 11) {
    message.delete()
    message.channel.send(`Tu viens d'ouvir la case n°12 de ton calendrier ! ${message.author}`)
    message.author.send("Voici le contenue de la douzième case de votre calendrier : Mon douzième est ``q``. Vous remportez également un yaourt à la grec !")
    client.channels.get('518188746219192320').send(`${message.author} à ouvert la case n°12 !`)

    }
  } 
});
