const Discord = require("discord.js")
  // Here we put discord.js as that is the library we are basing our code on, so the bot knows to check the library for the resources that are required.
const client = new Discord.Client();
const config = require("./config.json");
  // This tells the bot to look for the config.json file, which holds the token for the bot. Make sure the second last line of this file contains }) and the last line is client.login(config.token) otherwise it will not start.
client.on("message", async message => {
  // This tells the client to start up the bot.
  console.log(`${client.user.username} is ready! ID: ${client.user.id}.`)
  // `console.log` prints message in the command prompt window which is running the bot, so this output message will show if the bot has started without errors.
  client.user.setActivity(`on the computer`, { type: `PLAYING` });
  // You can change the text in the first group of quotations to be whatever you want the bot's status to say. In the second group of quotations, you can choose between WATCHING, STREAMING, LISTENING TO, or PLAYING. Playing is the default option and displays on normal user profiles.
  // If you're stuck for an idea, try putting the version number of your bot so users can spot when there's an update, or your help command, e.g %help.
})

  // Before we get to making commands, let's start by adding some variables. These will shorten our work load later on.
client.on("message", async message => {
  var prefix = "+"
  // This variable will act as a shortcut to the text in the quotations. Right now, it might not seem useful but you'll discover it is later on.
  // Remember you can change the text in the quotations to whatever prefix you would like your bot to have. I'll be sticking with + for mine.
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  // A const is similar to a var. I won't be going fully into detail on these here though, as this is not a JavaScript tutorial.
  // These two consts will greatly help out further on, especially the one named args, as we cannot make our say command without it.
  if(message.content.startsWith(prefix + "test")) {
    // The bracket at the end of this line is crucial as it is the opening for this section of code, which is all the configuration info of our %test command.
    // Forgetting either this, or the closing bracket for each section is a common mistake. If you get an error when trying to start your bot, check if one of these are missing first. Consult the troubleshooting section in the README.md file if this does not solve your issue.
    var command_test = new Discord.RichEmbed()
    // This variable will hold the configuration for our test command. I call mine command_(command name) to keep my code organized.
    .setColor("#f28d21")
    // You can change the value in the quotations to any HTML color code.
    .setAuthor(`${client.user.tag}`)
    // This makes the author line display the tag of the user who executed the command. I don't usually include this line in my bot. Feel free to remove it.
    // You can also add a description under the author line if you'd like by typing the following: .setDescription("description text here")
    .addField(":wave: Hi there!", "If you can see this message, the bot is online and the command executed correctly.")
    // The first set of quotations is the heading of the embed field, and the second is the body. Change them to say whatever you like.
    .setFooter("BotBuilder", client.user.avatarURL)
    // You can also change the footer text to say whatever you like, possibly a version number or something else.
    // The "client.user.avatarURL" will show the bot's profile picture in the footer.
    .setTimestamp(new Date ())
    // This adds a timestamp with the current local time to the footer line. You can remove this line if you don't want it.
    message.channel.send(command_test)
    // Notice that when we're telling the bot to send that message, we don't put it in quotations.
    // This is because we're referring to a variable rather than writing a line of text to put in there.
  }
  // This bracket closes this first command and we can now proceed to add a second. Remember to not forget this and the opening bracket.
  if(message.content.startsWith(prefix + "info")) {
    // Our second command will be an info command, containing a version number, developer info, and whatever else you want.
    // This command is constructed the same as the last.
    var command_info = new Discord.RichEmbed()
    .setColor("#f28d21")
    // I will be using the same color code for all my commands, however you can change each one individually for yours if you'd like to.
    // I'll also leave out the author line for this command, but you can add it in.
    .addField(":computer: Information", `Developer: TEC#0001\nLast restart: ${client.readyAt}`)
    // You may have noticed I used \n. This is used to indicate a new line.
    // I also used ${client.readyAt}, which shows the last time the bot rebooted.
    .setFooter("BotBuilder", client.user.avatarURL)
    .setTimestamp(new Date ())
    message.channel.send(command_info)
  }
  // Now we can close this section and move on to the next.
  // Probably one of the most common commands in every bot is a help command. This just lists all commands to let users explore the bot. Let's create ours now.
  if(message.content.startsWith(prefix + "help")) {
    var command_help = new Discord.RichEmbed
    .setColor("#efb120")
    .addField(":pencil: Commands List", "%ping - Displays the current latency time.\n%test = Checks to see if the bot is functioning properly.\n%info = Shows bot version and last restart time.\n%help = Displays this help messages.\n%changelog = Lists recent changes to the bot.")
    .setFooter("BotBuilder", client.user.avatarURL)
    .setTimestamp(new Date ())
    message.channel.send(command_help)
// Here we'll build our changelog command. This lets users know what's new in your bot.
   if(message.content.startsWith(prefix + "changelog")) {
     .setColor("#efb120")
     .addField(":arrows_counterclockwise: Changelog", "- Add your changes here\n- Add more here\n- Keep adding if needed")
     .setFooter("BotBuilder", client.user.avatarURL)
     .setTimestamp(new Date ())
     ,essage
// The ping command is slightly different to the rest, as we have to create 2 variables and a const. This is so the client (our bot) can grab the API latency, as well as client latency.
  if(message.content.startsWith(prefix + "ping")) {
    var command_ping1 = new Discord.RichEmbed
    .setColor("#efb120")
    .addField(":clock330: Pinging...", "Awaiting response from the Discord API...")
    .setFooter("BotBuilder", client.user.avatarURL)
    .setTimestamp(new Date ())
    const m = await message.channel.send(command_ping1);
    // This tells our bot to send a message saying "Pinging..." while it's pinging the API. This usually takes 1-5 seconds.
    var command_ping2 = new Discord.RichEmbed()
    // Now we have to write a second command for it to send when it's finished pinging, containing the information it just grabbed.
    .setColor("#efb120")
    .addField(":clock330: Pong!", `Client latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${client.ping}ms.`)
    // createdTimestamp will find the latency of the client to Discord, and ${client.ping} will find the API latency.
    .setFooter("TECbot v3.2", client.user.avatarURL)
    .setTimestamp(new Date ());
    m.edit(command_ping2);
    // Then we tell the client to edit the previous message with the new one.
  }
  })
 // Once all of this is configured to your liking, go ahead and start up your bot. It's now ready to use. If you do not yet understand how, refer to the README.md file provided.
 // But your bot building adventures don't have to end here though, you can copy and paste the code in the SAMPLE.js file in the line below a closing bracket and make your own command from it, which could range from sending your favorite YouTube video to promoting your Twitter account.
 // Head back to the README.md file now to sort out hosting and everything else. Thanks for choosing BotBuilder!
  client.login(config.token)
 // Make sure the token is actually in your config.json file. I explained how to get your token in the Preparing your bot for first use section of the README.md file.
