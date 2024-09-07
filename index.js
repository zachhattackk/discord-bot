// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js'); 
const { SlashCommandBuilder } = require('discord.js');
const { REST, Routes } = require('discord.js');
const { ButtonBuilder,ActionRowBuilder, ButtonStyle } = require('discord.js');

// Create a new client instance
let bot_token = 'MTI4MDk3ODUzNDM1NzEzOTQ2Ng.GnPia1.fF5pGoWg-Axa_0wE9NdO_S0yUzKeAYw5m6zSRc'

let command = new SlashCommandBuilder()
	.setName('availability')
	.setDescription('what times are you available?');

const rest = new REST().setToken(bot_token);
rest.put(
	Routes.applicationCommands('1280978534357139466'),
	{ body: [command.toJSON()] },
);

console.log('hello world')


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.InteractionCreate, interaction => {

    let days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
    let hours = [5,6,7,8]

    let replyLines = [];
    for (let day of days) {
        for (let hour of hours) {
            replyLines.push('**' + day + ' ' + hour + ' ' + 'PM' + '**')
            replyLines.push('-# <@' + interaction.user.id + '>' + '\n')
        }
    }

    const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm Ban')
			.setStyle(ButtonStyle.Danger);

    const row = new ActionRowBuilder()
			.addComponents(confirm);

    /*
    reply += '**Thursday 5 PM**\n';
    reply += '-# @' + interaction.user.username + '\n';
    reply += '\n';
    reply += '**Thursday 6 PM**\n';
    reply += '\n'
    reply += '**Thursday 7 PM**\n'
    reply += '\n'
    reply += '**Thursday 8 PM**\n'
    */

//    interaction.reply(replyLines.join('\n'));
//	console.log(interaction);

    interaction.reply({
        content: replyLines.join('\n'),
        components: [row],
    });
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(bot_token);

