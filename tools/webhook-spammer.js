const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const fs = require('fs');
const token = fs.readFileSync('./tokens.txt','utf8').split('\n');
const { WebhookClient } = require('discord.js-selfbot-v13');

readline.question("> You webhook url: ",  async (reply) => {
const webhookClient = new WebhookClient({ url: reply });
if(!webhookClient) {
    console.log("[!] Invalid webhook url");
    process.exit();
}
webhookClient.edit({name: "swan  | discord.gg/e1event"});
setInterval(async () => {
webhookClient.send('@everyone Hello nuked webhook by (swan discord.gg/e1even)');
}, 1000);

})