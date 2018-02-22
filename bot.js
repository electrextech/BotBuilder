  // As you will notice throughout the code, I use ` (backticks) as my quotations when inserting the text for command responses. I strongly recommend using backticks as you may run into further code issues if you use other quotations.
const Discord = require("discord.js")
  // Here we put discord.js as that is the library we are basing our code on, so the bot knows to check the library for the resources that are required.
const client = new Discord.Client();
const config = require("./config.json");
  // This tells the bot to look for the config.json file, which holds the token for the bot. Make sure the second last line of this file contains }) and the last line is client.login(config.token) otherwise it will not start.
client.on("message", async message => {
  // This tells the client to start up the bot.
  console.log(`Bot is starting...`)
  // `console.log` prints message in the command prompt window which is running the bot, so this output message will show if the bot is starting without errors.
  console.log(`${client.user.username} is ready! ID: ${client.user.id}.`)
  client.user.setActivity(`on the computer`, { type: `PLAYING` });
  // You can change the text in the first group of quotations to be whatever you want the bot`s status to say. In the second group of quotations, you can choose between WATCHING, STREAMING, LISTENING TO, or PLAYING. Playing is the default option and displays on normal user profiles.
  // If you're stuck for an idea, try putting the version number of your bot so users can spot when there's an update, or your help command, e.g %help.
})

  // Now let`s start our first command. In the quotations, you have to decide on a prefix, along with the name of the command to trigger a response. For this bot, I`ll be using % as my prefix, followed by the command name, but you can make yours whatever you like.
client.on("message", async message => {
  if(message.content.startsWith(`%test`)) {
    // The bracket at the end of this line is crucial as it is the opening for this section of code, which is all the configuration info of our %test command.
    // Forgetting either this, or the closing bracket for each section is a common mistake. If you get an error when trying to start your bot, check if one of these are missing first. Consult the troubleshooting section in the README.md file if this does not solve your issue.
    message.channel.send({embed: {
      // This tells the bot to make the following message an embed.
      "color": 3447003,
      // You can customize the color of your embed by replacing 3447003 with one of the following:
      // DEFAULT: 0, AQUA: 1752220, GREEN: 3066993, BLUE: 3447003, PURPLE: 10181046, GOLD: 15844367, ORANGE: 15105570, RED: 15158332, GREY: 9807270, DARKER_GREY: 8359053, NAVY: 3426654, DARK_AQUA: 1146986, DARK_GREEN: 2067276, DARK_BLUE: 2123412, DARK_PURPLE: 7419530, DARK_GOLD: 12745742, DARK_ORANGE: 11027200, DARK_RED: 10038562, DARK_GREY: 9936031, LIGHT_GREY: 12370112, DARK_NAVY: 2899536.
      "fields": [{
        "name": `:wave: Hello!`,
        // This is the name line of your embed. Place the text of your choice inside the quotations. I`ll start with :wave: as it inserts the wave emoji, as well as `Hello!` to greet people. We`ll be using this command to test if the bot is functioning.
        "value": `Hi there!\nIf you can see this, the bot is functioning correctly!`,
        // The `value` line is the main value that is outputted from this field. You may also notice I used \n. We use \n to indicate a new line.
      },
    ],
    "timestamp": new Date(),
    // You can remove the timestamp line if you choose to, this just adds a line at the bottom of embed where the current time of the host is displayed.
    "footer": {
      "icon_url": client.user.avatarURL,
      // This will use the bot`s profile picture as the icon in the corner of the embed.
      "text": `Command executed by ${message.author}`
      // There are many things people choose to put in this line, e.g your bot`s version, name or possibly even the current ping, which can be displayed by using ${client.ping}. Keep it mind you can add whatever text you want before and after it too, just experiment with different messages and see what looks best.
      // A nice idea is to show who the command was executed by, as it`s unusual and you learn how to print usernames. This can be done by writing ${message.author} as shown in the example above.
              }
            }
          });
  }
  // This bracket closes this first command and we can now proceed to add a second.
  if(message.content.startsWith(`%info`)) {
  // Our second command is going to be an info command, providing a version number, credits and whatever else you choose to display.
   message.channel.send({embed: {
     "color": 3447003,
     // Once again, you can customize elements such as the color, name and value that is outputted. Fill in these exactly like that last section. I have already inserted some standard lines for an info command, feel free replace elements such as the value or name.
     "fields": [{
       "name": `:desktop: Version`,
       // I like to add emojis in my name lines, you do not have to.
       "value": `Version 1.0`,
       // If you decide to stick with this, you can change the 1.0 as you update and add more features to your bot.
       "inline": true
       // The inline feature allows you to have seperate fields on the same line as each other. If I put it on the next line, those 2 will be on the same line rather than underneath each other like paragraphs.
     },
     {
       "name": `::person_with_blond_hair: Developer`,
       "value": `TheEighthCow#1584`,
       // Users of your bot know where to contact you if you leave some information here.
       "inline": true
       // As we added the inline feature in the previous field, adding it to this will merge them onto the same line.
     },
   ],
   "timestamp": new Date(),
   "footer": {
     "icon_url": client.user.avatarURL,
     "text": `Command executed by ${message.author}`
     // Remember, you can tweak these fields if there's something you don't like.
   }
 }
   });
  }
  // Probably one of the most common commands in every bot is a help command. This just lists all commands to let users explore the bot. Let's create ours now.
  if(message.content.startsWith(`%help`)) {
   message.channel.send({embed: {
           "color": 3447003,
           "fields": [{
               "name": `:pencil: Commands List`,
               // Try out different emojis or add quirky quotes to make your bot more unique rather than making it identical to other bots already available.
               "value": `help = Prints this help message.\nping = Pings the client and API to fetch the current latency.\nchangelog = Shows additions and bug fixes in the latest update.\ninfo = Lists information about the bot, including version and developer contact info.`,
               // You can update this message as you add more commands.
               // You may also notice there are some commands here that we haven't written yet, let's complete these in the next few sections.
        },
           ],
           "footer": {
            "icon_url": client.user.avatarURL,
            "text": `Command executed by ${message.author}`
                }
              }
            });
 }
// Here we'll build our changelog command. This lets users know what's new in your bot.
if(message.content.startsWith(`%changelog`)) {
 message.channel.send({embed: {
         color: 3447003,
         fields: [{
             name: `:envelope_with_arrow: Changes`,
             value: `- Sample change\n- Sample bug fix`,
             // Change the value in this when you do actually make a change to your bot, e.g add a new command or fix a bug.
      },
         ],
         "timestamp": new Date(),
         "footer": {
          "icon_url": client.user.avatarURL,
          "text": `Command executed by ${message.author}`
              }
            }
          });
}
// Now we have reached the most complicated of our commands. It's alright if you can't understand everything that happens here, there isn't much to change anyway.
if(message.content.startsWith("&ping")) {
    const m = await message.channel.send({embed: {
            "color": 3447003,
            "fields": [{
                "name": `:sleeping_accommodation: Ping in progress`,
                "value": `Awaiting response from the Discord API...`,
                // This sends a embed message to the channel saying Ping? while it waits for a response time from the API. Discord's API is quite fast and you may only see this messsage for less than half a second.
                // You can change the name and value to whatever you choose, I chose to describe what is happening during this timeframe.
              }
            ],
            "timestamp": new Date(),
            "footer": {
              "icon_url": client.user.avatarURL,
              "text": `Command executed by ${message.author.username}`
            }
          }
        });
    m.edit({embed: {
      // The message will edit once the ping is complete with the info below.
            "color": 3447003,
            "fields": [{
                "name": `:clock330: Pong!`,
                "value": `Client latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${client.ping}ms.`,
                // This line gives the information the ping test returned. The client latency is the time it takes for the host to reach Discord's servers. The API latency is the response time of Discord's servers.
                // We use ms at the end as ping is usually measured in this unit: milliseconds.
              }
            ],
            "timestamp": new Date(),
            "footer": {
              "icon_url": client.user.avatarURL,
              "text": `Command executed by ${message.author.username}`
            }
          }
        });
  }
 })
 // Once all of this is configured to your liking, go ahead and start up your bot. It's now ready to use. If you do not yet understand how, refer to the README.md file provided.
 // But your bot building adventures don't have to end here though, you can copy and paste the code in the SAMPLE.js file in the line below a closing bracket and make your own command from it, which could range from sending your favorite YouTube video to promoting your Twitter account.
 // Head back to the README.md file now to sort out hosting and everything else. Thanks for choosing BotBuilder!
 client.login(config.token)
 // Make sure the token is actually in your config.json file. I explained how to get your token in the Preparing your bot for first use section of the README.md file.
