const { SlashCommandBuilder } = require("discord.js");
const Booru = require("booru");
const { post } = require("request");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime-search")
    .setDescription("Search any anime image from Safebooru!")
    .addStringOption((option) =>
      option
        .setName("tag")
        .setDescription("Put here the tag that you want to search")
        .setRequired(true)
    ),
  async execute(interaction) {
    const tag = interaction.options.getString("tag");

    Booru.search("safebooru", [tag.toString()], {
      limit: 1,
      random: true,
    }).then((posts) => {
      for (let post of posts) interaction.reply(post.fileUrl.toString());
    });
  },
};
