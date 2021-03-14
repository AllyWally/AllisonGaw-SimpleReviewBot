const { Client, Collection, MessageEmbed } = require('discord.js');
const config = require('./data/config.json')
const client = new Client();
const fs = require('fs');

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props)
        if (props.aliases) {
            props.aliases.forEach(alias => {
                client.aliases.set(alias, props)
            })
        }
    })
});

fs.readdir(`./events/`, (err, file) => {
    if(err) console.log(err);
    file.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    })
})

client.login(config.BotData.token)