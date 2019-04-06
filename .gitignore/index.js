const Commando = require('discord.js-commando');
const config = require("./kjhhlolm.json");

const client = new Commando.Client({
    owner: config.botOwnerID,
    commandPrefix: config.prefix,
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry.registerGroup('khkhkh', 'Khkhkh');


// Registries etc.
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/rtfyyhhj");

client.login(config.token);
