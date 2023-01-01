const { SlashCommandBuilder } = require("discord.js");
const Booru = require("booru");
const { post } = require("request");

//
module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime-search")
    .setDescription("Search any anime image from Safebooru!")
    .addStringOption((option) =>
      option
        .setName("tag")
        .setDescription("Put here the tag that you want to search")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("tag2")
        .setDescription("Put here the second tag that you want to search. (place ''-n'' if you don't want to use this)")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("tag3")
        .setDescription("Put here the third tag that you want to search. (place ''-n'' if you don't want to use this)")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("tag4")
        .setDescription("Put here the fourth tag that you want to search. (place ''-n'' if you don't want to use this)")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("quantity")
        .setDescription(
          "Put here the quantity of images that you want (NUMBER ONLY)"
        )
        .setMaxValue(10)
        .setMinValue(1)
        .setRequired(true)
    ),
  //Hi i know this is messy... but it works!
  async execute(interaction) {
    await interaction.reply("Loading...");
    const tag = interaction.options.getString("tag");
    let tag2 = interaction.options.getString("tag2");
    let tag3 = interaction.options.getString("tag3");
    let tag4 = interaction.options.getString("tag4");
    const limit = interaction.options.getInteger("quantity");
    await interaction.editReply("Loaded!");
    Booru.search("safebooru", [tag, tag2, tag3, tag4], {
      limit: limit,
      random: true,
    }).then(async (posts) => {
      for (let post of posts) await interaction.followUp(post.fileUrl.toString());
    });
  },
};
