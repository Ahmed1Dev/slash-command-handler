const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    name: `ahmed1dev`,
    description: `Ahmed1Dev Information`,
    run: async (client, interaction) => {
        let Support = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Support Server")
              .setURL("https://discord.gg/XBwBEg8fVA")
              .setStyle(ButtonStyle.Link),
          )
          let Github = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Github")
              .setURL("https://github.com/Ahmed1Dev/slash-command-handler")
              .setStyle(ButtonStyle.Link),
          )
          let Replit = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Replit")
              .setURL("https://replit.com/@tokyo-studio/Slash-Command-Handler")
              .setStyle(ButtonStyle.Link),
          )
        const tokyo = new EmbedBuilder()
        .setTitle("**Tokyo Studio | Slash Command Handler**")
        .setColor("Blue")
        .addFields([
            { name: "Slash Command Handler", value: "Project on Github [Slash Command Handler](https://github.com/Ahmed1Dev/slash-command-handler) \n Project on Replit [Slash Command Handler](https://replit.com/@tokyo-studio/Slash-Command-Handler)" },
            { name: "Support Server", value: "You Have Problem Contact [Support Server](https://discord.gg/XBwBEg8fVA)" }
        ]);
        interaction.reply({ content: "Thanks For Using `Ahmed1Dev Slash Command Handler`v1",embeds: [tokyo], components: [Support, Github, Replit] })
    }
}
