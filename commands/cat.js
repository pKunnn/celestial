const { TheCatAPI } = require("@thatapicompany/thecatapi");
const theCatAPI = new TheCatAPI(
  "https://thecatapi.com/signup (sign up, then you will get a api key via email)"
);
const { post } = require("request");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Sends a random cat image! (powered by thecatapi.com)"),
  async execute(interaction) {
    await interaction.reply("Loading...");
    await interaction.editReply("Loaded!");
    theCatAPI.images
      .searchImages({
        limit: 1,
      })
      .then(async (images) => {
        for (let post of images) await interaction.followUp(post.url.toString());
      });
  },
};
