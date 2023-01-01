const { SlashCommandBuilder } = require("discord.js");
const { Base64 } = require("js-base64");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("base64")
    .setDescription("Encode or Decode any text to Base64!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to encode or decode.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("base64")
        .setDescription("Choose between encoding or decoding")
        .setRequired(true)
        .addChoices(
          { name: "encode", value: "E" },
          { name: "decode", value: "D" }
        )
    ),
  async execute(interaction) {
    const category = interaction.options.getString("base64");
    const inputlol = interaction.options.getString("input");
    if (category === "E") {
      await interaction.reply(
        `The translation from` +
          "`" +
          inputlol +
          "`" +
          " to base64 is " +
          "`" +
          Base64.encode(inputlol).toString() +
          "`" +
          "."
      );
    } else if (category === "D") {
      await interaction.reply(
        `The translation from` +
          "`" +
          inputlol +
          "`" +
          " to normal text is " +
          "`" +
          Base64.decode(inputlol).toString() +
          "`" +
          "."
      );
    } else {
      await interaction.reply({
        content: "Something went wrong...",
        ephemeral: true,
      });
    }
  },
};
