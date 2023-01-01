const { SlashCommandBuilder } = require("discord.js");
const translate = require("node-google-translate-skidz");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Translate any text to (almost) any language!")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Put here the text you want to translate")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("language")
        .setDescription(
          "Choose any of the pre-setted languages to translate your text"
        )
        .addChoices(
          //yes i wrote this by hand
          { name: "afrikaans", value: "af" },
          { name: "arabic", value: "ar" },
          { name: "bulgarian", value: "bg" },
          { name: "chinese", value: "zh" },
          { name: "croatian", value: "hr" },
          { name: "czech", value: "cs" },
          { name: "dutch", value: "nl" },
          { name: "english american", value: "en" },
          { name: "french", value: "fr" },
          { name: "german", value: "de" },
          { name: "hungarian", value: "hu" },
          { name: "indonesian", value: "in" },
          { name: "italian", value: "it" },
          { name: "japanese", value: "ca" },
          { name: "korean", value: "ko" },
          { name: "latin", value: "la" },
          { name: "polish", value: "pl" },
          { name: "portuguese", value: "pt" },
          { name: "russian", value: "ru" },
          { name: "spanish", value: "es" },
          { name: "swedish", value: "sv" },
          { name: "turkish", value: "tr" },
          { name: "ukrainian", value: "uk" },
          { name: "vietnamese", value: "vi" }, //Scoreboard scoreboard! Aww what happened to your friend? Hey i know that guy! I killed him, he cried like a bitch! Vietnam undefeated!
          { name: "zulu", value: "zu" }
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    const text = interaction.options.getString("text");
    const language = interaction.options.getString("language");

    translate(
      {
        text: text.toString(),
        source: "auto",
        target: language.toString(),
      },
      function (result) {
        interaction.reply(result.toString());
      }
    );
  },
};