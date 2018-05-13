# BotBuilder
A basic tutorial on how to create a simple bot for yourself in discord.js, including sample code for adding commands, making embeds and more.

You can download and customize the bot for yourself by navigating to "Clone or Download" and selecting download ZIP. With included notes, descriptions and sample code, BotBuilder provides an easy way to create your own Discord bot.

## Getting started ##
Once you've downloaded the ZIP folder with the bot contents, extract them to a folder and name it what you want your bot to be called. To configure the files inside properly, we're going to need a code editor. There are quite a few choices, but the most popular is Visual Studio Code. I personally use Atom, but if your a beginner and are not sure which to choose, I'd recommend just getting VSC from here: https://code.visualstudio.com/. It's free and available for Windows, Mac & Linux.

Now you can open up your bot's code files with your new editor. Read through the sample.js file first to understand what each line means. Then once you feel you're ready, head over to the bot.js file to customize the bot for yourself. There are many lines filled with useful notes, references and tips to help you tweak your bot just to your liking. After you've completed that, it's time to introduce your bot to Discord. Keep in mind if you change anything in your bot.js file while the bot is running, you'll need to save and restart it. Restarting is performed the same way you start up the bot, which you'll learn in the next section.

## Preparing your bot for first use ##
To run your bot, you'll need to install node.js if you haven't already. You can grab the latest version from here: https://nodejs.org/ then run through the setup. Now you need to install discord.js to your bot's directory. Open the Command Prompt by using the Win+R shortcut and type "cmd". Navigate to your bot's folder. Once inside, type npm install discord.js --save then wait for it to finish. Next type npm init and enter the name of your bot in the first line and press enter. You can press enter to skip the rest until you complete the setup.

Let's create your bot's account now. Head to https://discordapp.com/developers/applications/me/create and enter the chosen name for your bot. You can add a profile picture here if you want. Continue by clicking "Build App". Scroll down that page and choose "Create a bot user". Beside the token line, select "click to reveal" and copy the new text that appears. Do not share this token with anyone as it will give them full access to your bot's account and will result in your account getting banned if they break the TOS with your bot. Open the config.json file in your bot's folder and paste the token inside the brackets on the token line and save the file.

Open Command Prompt and navigate to your bot's folder again. Type node bot.js and press enter. If it says "YourBotsName is ready!", everything worked correctly! This command is how you'll start up your bot. To stop the bot, press CTRL+C. If it didn't start correctly, read your error message and refer to the next section for help.

You'll obviously need to invite your bot to your server now. Go to https://discordapp.com/developers/applications/me and click on your bot. Now scroll down until you see "Generate OAuth2 URL" and click on it. Choose what permissions your bot needs, then copy the link given and paste it into your browser. Select the server you want to add it to from the drop-down menu. If the server you want to add it to isn't listed, check to see if you have Manage Server permissions in that server. Congratulations! You've just built your own bot! Now that it's ready, read over the "Hosting your bot" section as it's important, but not mentioned in a lot of tutorials.

## Troubleshooting startup errors ##
If you tried to start your bot and got "SyntaxError: Invalid or unexpected token" it just means you missed a quotation mark or bracket somewhere. In Atom, your code will highlight red if you wrote something wrong. Check at the start of the highlighted section what you missed or added in too many of.

If you got "SyntaxError: missing ) after argument list" you forgot to end a section with a bracket. It may not be at the end of an entire block of code, possibly somewhere in the middle of one. Usually Atom highlights these errors too.

If you fixed the problem in your code, you'll need to restart the bot. Press CTRL+C in your command window to stop it and node bot.js to start it up again. If you got the same error, check through the code manually again or make sure you saved the file. Not saving the file is a common mistake made.

If you got an error that isn't listed here, you can DM me at TEC#0001 on Discord with your error and your code. I'll get back to you as soon as possible.

## Hosting your bot ##
The downside to creating your own bot is finding somewhere to host it. When that command prompt window isn't open with the bot running, your bot will be offline. That means that if your computer is off, so is your bot. If you can't find anywhere to host your bot besides your own computer, unfortunately your bot won't be up 24/7. Before you give up hope though, you could look into a Raspberry Pi, a tiny $30 computer built for tinkerers and host it there, which I may actually purchase myself in the future.

## Support me! ##
If this helped you out, please share it to your friends or someone else that would enjoy writing their own bot. When I began working on Discord bots back in November 2017, I had trouble finding accurate tutorials on how to set up a bot myself. Most were quite out of date, but the ones that weren't didn't describe anything that was happening, just informed me to paste in this code, and offered no help for beginners. My experience inspired me to share my newfound knowledge about code. While this isn't a YouTube video like most will use instead, I hope my hours spent writing notes in the code and creating this readme file will let some eager chatter setup a bot themselves. Thanks for choosing BotBuilder!

If you need any more help, you can ask in the #coding-help channel in my Discord server, joinable here: https://discord.gg/qFNAMH9.

## Credits ##
Thank you to @TechyManTM for his generous help with the embeds.
