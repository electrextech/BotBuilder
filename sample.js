  // Hi there! This file contains sample code for you to use in your embed. It is recommended that you read this before continuing ahead to the bot.js so you can understand what you are writing.
  // The first block of code is the same as the second, except the first has notes to explain what is occuring because of this line.
  // If you have compleleted editing bot.js and want to add a custom command, copy the second block of code and paste it after a closing bracket for a command in the bot.js as it is a clean sample.
if(message.content.startsWith(prefix + "test")) {
  // This is our standard opening line for our command. It gives a set response for our bot to use if a message starts with our chosen prefix and test.
  // You will compose a response in the bot.js file.
  var command_test = new Discord.RichEmbed()
  .setColor("#f28d21")
  // This can be customized to contain any HTML color code.
  .setAuthor(`${message.author.username}`)
  // This puts the usermame of the user who executed the command in the author line. You can put anything else here or remove it.
  .setDescription("Just a test command.")
  // Used as a command description. You can put anything else here or remove it.
  .addField("Title", "Body")
  // For adding fields in your embed; this is the main part.
  .setFooter("BotBuilder", client.user.avatarURL)
  // Uses the text in quotations for the footer line, and includes the bot's profile picture.
  .setTimestamp(new Date ())
  // Adds the current time.
  message.channel.send(command_test)
  // Ensure the text in the brackets matches your variable name.
}
// The last closing bracket will end this block of code. In your bot's main code files, bot.js, you add new commands by pasting the sample block of code in the line under this closing bracket.
// Just be sure that it is the final line in that section, and not just the break between the fields and the footer.

// SAMPLE BLOCK OF CODE:
if(message.content.startsWith(prefix + "test")) {
  var command_test = new Discord.RichEmbed()
  .setColor("#f28d21")
  .setAuthor(`${message.author.username}`)
  .setDescription("Just a test command.")
  .addField("Title", "Body")
  .setFooter("BotBuilder", client.user.avatarURL)
  .setTimestamp(new Date ())
  message.channel.send(command_test)
}
