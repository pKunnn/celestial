const { SlashCommandBuilder } = require("discord.js");
var  morse  = require('morse');
var morse = require('morse-decoder')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("morse")
    .setDescription("Encode or Decode anything to/from morse code")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to convert")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("morse")
        .setDescription("Choose between code or decode")
        .setChoices(
          { name: "Encode", value: "E" },
          { name: "Decode", value: "D" }
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    const morses = interaction.options.getString("morse");
    if (morses === "E") {    
      await interaction.reply("`" + input + "`" + " to morse code is "+ "`" + morse.encode(input).toString()+ "`");
    } else if (morses === "D") {
      await interaction.reply("`" + input + "`" + " to ASCII code is "+ "`" + morse.decode(input).toString()+ "`");
    } else {
      await interaction.reply("Something went wrong...");
    }
  },
};
