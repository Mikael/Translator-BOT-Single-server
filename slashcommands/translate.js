const Discord = require('discord.js');
const crypto = require("crypto");
const fs = require("fs");
const { clear } = require('console');
const { channel } = require('diagnostics_channel');
const { translatetext } = require('../functions/function.js')

const run = async (client, interaction) => {
    if (!interaction.guild) return;

    let texttotranslate = interaction.options.getString("textpls")
    await interaction.deferReply({ ephemeral: true });
    try {
                translatetext(texttotranslate, (err, result) => {
                    if (err) {
                        interaction.followUp({ content: result, ephemeral: true });
                    } else {
                        interaction.followUp({ content: result, ephemeral: true });
                    }
                })
            } catch (error) {
                interaction.followUp({ content: `error: ${error}`, ephemeral: true });
            }
}

module.exports = {
    name: "translate",
    description: "translate",
    options: [
        {
            name: "textpls", description: "text",
            type: "STRING", required: true
        },
    ],
    run
}
