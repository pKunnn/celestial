//Using a code made by https://github.com/tylerrosnett/ | Couldn't contact them so i'll leave the credits here
//Also thecatapi has only 10k requests so that's why i choosed to replace it
//I edited tyler's code so it can work in the new discord api
//If you're tyler and don't want me to use your code contact me via discord: High#0571

const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const https = require("https");
const url = new URL("https://cataas.com/cat");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Sends a random cat image! (powered by cataas.com)"),
  async execute(interaction) {
    await interaction.reply("Loading...");
    await interaction.editReply("Loaded!");
    const file = fs.createWriteStream("./cat.gif");

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(
          new Error(`Request Failed.\nStatus Code: ${res.statusCode}`)
        );
      } else {
        res.pipe(file).on("finish", () => {
          file.close();
          interaction.followUp({
            files: ["./cat.gif"],
          });
        });
      }
    });
  },
};
