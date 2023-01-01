const { SlashCommandBuilder } = require("discord.js");
const { converter } = require("javascript-binary-converter");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("binary")
    .setDescription("Convert any text to binary code!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to convert")
        .setRequired(true)
    ),
  async execute(interaction) {
    const inputa = interaction.options.getString("input");
    const reply = converter(inputa).toBinary();
    await interaction.reply(
      `The convertion from ` +
        "`" +
        inputa +
        "`" +
        ` to binary is ` +
        "`" +
        reply.toString() +
        "`" +
        `.`
    );
  },
};
