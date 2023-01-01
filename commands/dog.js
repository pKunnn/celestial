const { SlashCommandBuilder } = require("discord.js");
const request = require("request");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dog")
    .setDescription("Sends a random dog image! (powered by random.dog)"),
    async execute(interaction) {
        await interaction.reply("Loading...");
        await interaction.editReply("Loaded!");
        request('https://random.dog/woof?filter=mp4,webm', async function (error, response, body) {
            await interaction.followUp("https://random.dog/" + body);
        });
    },
    
};
