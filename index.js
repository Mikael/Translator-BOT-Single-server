const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const mySecret = process.env['BOT_TOKEN']
const { translatetext } = require('./functions/function.js')
const embed = require('discord-embed-generator');


require("dotenv").config()

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ]
})
// channel IDs for languages
const german = '1017620637428236388';
const french = '1017620625919062236';
const english = '1017620611088003104';
const russian = '1017620717266813028';
const hebrew = '1017620747985899571';
const korean = '1017620660404625508';
const chinese = '1017620687680180295';
const japanese = '1017662972157505556';

/*
translatetext(message.content, 'ru', 'ja', (err, result) => {
     if (err) {
       console.log(err)
     } else {
       client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
     }
   }) 
*/

let bot = {
  client
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("debug", (text) => {
  console.log(`${text}`)
})

const getAuthorDisplayName = async (msg) => {
  const member = await msg.guild.member(msg.author);
  return member ? member.nickname : msg.author.username;
}

client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return;
  //english channel //included fr, de, ru, he, ch, ja
  if (message.channel.name === "en") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'en', 'fr', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
          translatetext(message.content, 'en', 'de', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
              translatetext(message.content, 'en', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to ru channel
                  translatetext(message.content, 'en', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to he channel
                      translatetext(message.content, 'en', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'en', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'en', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }

          })
        }
      })
    } catch (error) {
      console.log(error)
    }
    //french channel //included de, en, ru, he, ch, ja
  } else if (message.channel.name === "fr") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'fr', 'de', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
          translatetext(message.content, 'fr', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'fr', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to ru channel
                  translatetext(message.content, 'fr', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to he channel
                      translatetext(message.content, 'fr', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'fr', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'fr', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }

    //french channel //included de, en, ru, he, ch
  } else if (message.channel.name === "jp") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'ja', 'de', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
          translatetext(message.content, 'ja', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'ja', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to ru channel
                  translatetext(message.content, 'ja', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to he channel
                      translatetext(message.content, 'ja', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'ja', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'ja', 'fr', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }


    //chinese channel //included de, en, ru, he, fr, ja
  } else if (message.channel.name === "ch") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'zh-CN', 'de', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
          translatetext(message.content, 'zh-CN', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'zh-CN', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to ru channel
                  translatetext(message.content, 'zh-CN', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to he channel
                      translatetext(message.content, 'zh-CN', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'zh-CN', 'fr', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
                              translatetext(message.content, 'zh-CN', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }

    //korean channel //included en, de, fr, ru, he, ch
  } else if (message.channel.name === "kr") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'ko', 'de', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
          translatetext(message.content, 'ko', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'ko', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to ru channel
                  translatetext(message.content, 'ko', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to he channel
                      translatetext(message.content, 'ko', 'fr', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
                          translatetext(message.content, 'ko', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'ko', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }

    //german channel //included fr, en, ru, he, ko, ch
  } else if (message.channel.name === "de") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'de', 'fr', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
          translatetext(message.content, 'de', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'de', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to fr channel
                  translatetext(message.content, 'de', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to fr channel
                      translatetext(message.content, 'de', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'de', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'de', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }


    //hebrew channel //included fr, en, ru, de, ko, ch
  } else if (message.channel.name === "he") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'he', 'fr', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
          translatetext(message.content, 'he', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'he', 'ru', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(russian).send(`${message.member.displayName}: ${result}`); // send to fr channel
                  translatetext(message.content, 'he', 'de', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to fr channel
                      translatetext(message.content, 'he', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'he', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'he', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }

    //russian channel
  } else if (message.channel.name === "ru") {
    try { // translatetext(message.content, fromlang, tolang,
      translatetext(message.content, 'ru', 'de', (err, result) => {
        if (err) {
          console.log(err)
        } else {
          client.channels.cache.get(german).send(`${message.member.displayName}: ${result}`); // send to de channel
          translatetext(message.content, 'ru', 'en', (err, result) => {
            if (err) {
              console.log(err)
            } else {
              client.channels.cache.get(english).send(`${message.member.displayName}: ${result}`); // send to en channel
              translatetext(message.content, 'ru', 'fr', (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  client.channels.cache.get(french).send(`${message.member.displayName}: ${result}`); // send to fr channel
                  translatetext(message.content, 'ru', 'he', (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      client.channels.cache.get(hebrew).send(`${message.member.displayName}: ${result}`); // send to fr channel
                      translatetext(message.content, 'ru', 'ko', (err, result) => {
                        if (err) {
                          console.log(err)
                        } else {
                          client.channels.cache.get(korean).send(`${message.member.displayName}: ${result}`); // send to kr channel
                          translatetext(message.content, 'ru', 'zh-CN', (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              client.channels.cache.get(chinese).send(`${message.member.displayName}: ${result}`); // send to ch channel
                              translatetext(message.content, 'ru', 'ja', (err, result) => {
                                if (err) {
                                  console.log(err)
                                } else {
                                  client.channels.cache.get(japanese).send(`${message.member.displayName}: ${result}`); // send to jp channel
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  } else { return; }
});


client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return
  if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

  const slashcmd = client.slashcommands.get(interaction.commandName)
  if (!slashcmd) return interaction.reply("Invalid slash command")

  if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
    return interaction.reply("You do not have permission for this command")

  slashcmd.run(client, interaction)
})

client.login(mySecret)