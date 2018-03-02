  // Hi there! This file contains sample code for you to use in your embed. It is recommended that you read this before continuing ahead to the bot.js so you can understand what you are writing.
  // The first block of code is the same as the second, except the first has notes to explain what is occuring because of this line.
  // If you have compleleted editing bot.js and want to add a custom command, copy the second block of code and paste it after a closing bracket for a command in the bot.js as it is a clean sample.
if(message.content.startsWith(`%test`)) {
  // This is our standard opening line for our command. It tells the bot that if a message starts with %test to respond with something else. You will compose a response in the bot.js file.
    "color": 3447003,
    // You can customize the color of your embed by replacing 3447003 with one of the following:
    // DEFAULT: 0, AQUA: 1752220, GREEN: 3066993, BLUE: 3447003, PURPLE: 10181046, GOLD: 15844367, ORANGE: 15105570, RED: 15158332, GREY: 9807270, DARKER_GREY: 8359053, NAVY: 3426654, DARK_AQUA: 1146986, DARK_GREEN: 2067276, DARK_BLUE: 2123412, DARK_PURPLE: 7419530, DARK_GOLD: 12745742, DARK_ORANGE: 11027200, DARK_RED: 10038562, DARK_GREY: 9936031, LIGHT_GREY: 12370112, DARK_NAVY: 2899536.
    // This is a useful reference and has been placed in the bot.js file for easy referring, if you wish to change the color of an embed.
    "fields": [{
      "name": `:wave: Test`,
      // This is the title line of your embed. As shown, you can insert emojis by copying their name from Discord.
      "value": `This is just a test.\nAnother line in the test.`,
      // The value line is the main text that displays in your embed. I also used \n here to indicate a new line.
    },
  ],
  "timestamp": new Date(),
  // This will print the current host's time in the footer of your embed. Remove the line if you do not want a timestamp in your embed.
  "footer": {
    "icon_url": client.user.avatarURL,
    // This will use the bot`s profile picture as the icon in the corner of the embed. You may delete the line if you do not want it displayed.
    "text": `Command executed by ${message.author}`
    // This is where you decide on the text shown in your embed. Why not make up something original to place in here?
    // If you're stuck for ideas, you could try displaying the ping by adding ${client.ping} or display who the command was executed by as shown in the example.
            }
          }
        });
 }
// The last closing bracket will end this block of code. In your bot's main code files, bot.js, you add new commands by pasting the sample block of code in the line under this closing bracket.
// Just be sure that it is the final line in that section, and not just the break between the fields and the footer.

         // SAMPLE BLOCK OF CODE:
         if(message.content.startsWith(`%sample`)) {
           message.channel.send({embed: {
           "color": 1752220,
           "fields": [{
             "name": `:wave: Test`,
             "value": `This is just a test.\nAnother line in the test.`,
           },
         ],

         "timestamp": new Date(),
         "footer": {
           "icon_url": client.user.avatarURL,
           "text": `This is the footer.`
                   }
                 }
              });
          }
