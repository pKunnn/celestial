const { SlashCommandBuilder } = require("discord.js");
const search = require("youtube-search");

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
        key: "AIzaSyDcbTfOM4c8sAQLcjqSM2ysdFiLdGYV6Wc",
    };     
    const bruh = interaction.options.getString("input");
    search(bruh, opts, async function (err, results, id) {
        if (err)
          return await interaction.reply({ content: err.toString(), ephemeral: true });
      
          var url = results[0];
          await interaction.reply(`First result to ` + "`" + bruh + "`" + " is "  +  url.link.toString() +  " .");
          });

    }
};

