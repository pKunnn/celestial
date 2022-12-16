const { SlashCommandBuilder } = require("discord.js");
var search = require("youtube-search");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("youtube-search")
    .setDescription("Search any youtube video by name! (it doesn't play yet)")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to search")
        .setRequired(true)
    ),
    async execute(interaction) {
    const opts = {
        maxResults: 10,
        key: "Youtube v3 API key", //if you don't know how to get this api key then just don't use the bot 💀
    };     
    const bruh = interaction.options.getString("input");
    search(bruh, opts, async function (err, results, id) {
        if (err)
          return interaction.reply({ content: err.toString(), ephemeral: true });
      
          var url = results[0];
//          await interaction.reply(url.title.toString());
          await interaction.reply(`First result to ` + "`" + bruh + "`" + " is "  +  url.link.toString() +  " .");
          });
      
    }
};

