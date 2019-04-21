const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569507593232580621")
setInterval(function() {
channel.send(`الله اكبر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
