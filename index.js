/* * * * * * DEMETER BOT SOURCE CODE... * * * * * */
/* * * * * * DISCORD: alfredhelps * * * * * * * * */
const mineflayer = require("mineflayer");
const Discord = require("discord.js");
const db = require("quick.db");
const axios = require("axios")
const fs = require('fs');
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 
const client = new Discord.Client()
require('discord-replys-v12')
        
client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
   
client.api.applications(client.user.id).guilds('1143423512699228160').commands.post({
    data: {
       name: "resetbot",
      description:"reset bot"
    }
});


});

client.ws.on('INTERACTION_CREATE', async interaction => {
  const command = interaction.data.name.toLowerCase();

   if (command === 'players') {
        
        const player = Object.keys(bot.players)
        const playerInfo = [];

        for (const playerName of player) {
            const player = bot.players[playerName];
            const playerPing = player.ping;
            playerInfo.push(`${playerName} ${playerPing}ms`);
        }

        const playerInfoString = playerInfo.join("\n");

        const embed = new Discord.MessageEmbed()
            .setTitle(`There are ${player.length} people online`)
            .setDescription("```" + playerInfoString + "```")
            .setColor(getRandomColor())
            .setTimestamp()
            .setFooter("Requested by " + interaction.member.user.username);

        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    embeds: [embed],
                }
            }
        });
    } else if (command === "chat") {
        const message = interaction.data.options.find(option => option.name === 'message').value;
           const ids = ["762910903325818880","868951014487756861"]

      if(!ids.includes(interaction.member.user.id)) return client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
        type: 4,
        data: {
            content: `bro fuk off fr `,
        }
    }
});
      bot.chat(message)
      
client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
        type: 4, 
        data: {
            content: `sent ${message} to demeter chat as owner fr`,
        }
    }
})
    } else if (command === "resetbot") {
      const ids = ["868951014487756861","861095419663482921"]
      if(!ids.includes(interaction.member.user.id)) return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data : {
            content: "no"
          }
        }
      })
       client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data : {
            content: "Restarting bot in approx 5 seconds."
          }
        }
      })
      setTimeout(() => {
        process.exit(1)
      }, 5000)
    }
  
    
        })    // i reply with an api interaction      
const fetch = require("node-fetch")
                      
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
let isRequesting = false;

async function suckdick(userMessage) {
if (userMessage.length < 3) {
    return 'Message too long, be more specific'
  }  if (isRequesting) {
    return;
  }

  isRequesting = true;

  try {
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: userMessage,
        max_tokens: 50
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    return 'OpenAI Response:', data.choices[0].text.trim()
  } catch (error) {
    console.error('Error fetching OpenAI response:', error.message);
  } finally {
    isRequesting = false;
  }
}




client.login(process.env.TOKEN);
const discordServerID = "1143423512699228160";
const chatChannelID = "1144239834483920957";

async function toDiscordChat(msg) {
  return client.guilds.cache
    .get(discordServerID)
    .channels.cache.get(chatChannelID)
    .send({
      content: msg,
    });
}
async function toDiscordChat2(msg) {
  return client.guilds.cache
    .get(discordServerID)
    .channels.cache.get("1143434773017149490")
    .send(msg);
}
async function toAutoIgnoreLog(embed) {
  const channel = client.guilds.cache
    .get(discordServerID)
    .channels.cache.get("1147541465522774016");

  channel.send(embed)
    .then(() => {
      console.log("Embed sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending embed:", error);
    });
}

client.on("ready", async (ready) => {
  const channel = client.channels.cache.get("1143429049822224384");
  channel.join();
});

async function toBotChat(msg) {
  return bot.chat(msg);
}

 

const id = ["762910903325818880", "868951014487756861","924470532039131186"];

const allKeys = db.all().map(entry => entry.ID);
const matchingEntries = [];

for (const key of allKeys) {
  const value = db.fetch(key);
  if (value === 'ignored' || value === 'falseflagged') {
    matchingEntries.push({ key, value });
  }
}



function random(array) {
  return array[Math.floor[Math.random() * array.length]]
}

client.on('guildMemberAdd', (member) => {
  if(member.guild.id !== "1143423512699228160") return
  const welcomeChannel = member.guild.channels.cache.find((channel) => channel.name === 'register');
  if (welcomeChannel) {
    welcomeChannel.send(`Welcome to the server <@!${member.id}> pls provide your username rank and tier`);
  }
});
const startTime = new Date();
const aicooldownDuration = 30000;
const aicooldowns = {};
const aicooldownNotified = {};
const cooldowns = {}; 
const cooldownNotified = {}; 
    function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

client.on("message", async(message) => {
  if(message.content.includes("discord.gg/")) return message.delete();
  if(message.channel.id === "1173343914057543690") {
    if(message.author.bot) return
    const args = message.content.split(" ")
    const prompt = args.slice(1).join(" ")
    message.channel.startTyping()
    setTimeout(async() => {
      const hook = message.channel
      message.replyMention(await suckdick(prompt))
      message.channel.stopTyping()
    }, 5000)
  }
  if(message.content.startsWith("!!") && message.channel.id === "1143423513429028867"&& !message.content.startsWith("!!lock")&& !message.content.startsWith("!!unlock") && !message.content.startsWith("!!ban")&& !message.content.startsWith("!!kick") &&!message.content.startsWith("!!purge") && !message.content.startsWith("!!fakemsg")) return message.replyMention("what is <#1143434773017149490> for").then((msg) => {
    setTimeout(() => msg.delete(), 3000)
  })
  const channel = message.channel
   if (message.content.startsWith("!!lock")) {
            if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_ROLES")) return
        const role = message.guild.roles.cache.get('1143423813774753832');
        if (!role) {
            return message.reply('Role not found.');
        }

        channel.updateOverwrite(role, { SEND_MESSAGES: false })
            .then(() => {
                message.replyMention(`<@!${message.author.id}> locked the channel.`);
            })
            .catch((error) => {
                console.error('Error locking channel:', error);
                message.channel.send('Error locking channel.');
            });
   }
    if (message.content.startsWith("!!unlock")) {
  
     if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_ROLES")) return
        const role = message.guild.roles.cache.get('1143423813774753832');
        if (!role) {
            return message.reply('Role not found.');
        }

        channel.updateOverwrite(role, { SEND_MESSAGES: true })
            .then(() => {
                          message.replyMention(`<@!${message.author.id}> unlocked the channel.`);
            })
            .catch((error) => {
                console.error('Error unlocking channel:', error);
                message.channel.send('Error unlocking channel.');
            });
    }

  if(message.content.startsWith("!!8ball")) {
    if(!message.content.split(" ")[1]) return message.replyMention("Bro what do u ask to Magic 8 ball lol?")
    const ballresponse = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Signs are unclear.",
    "Unclear, try again later.",
    "Maybe.",
    "It's possible."
];
  message.replyMention(`Magic 8 Ball says: ${ballresponse[Math.floor(Math.random() * ballresponse.length)]}`)  
  }
  if(message.content.startsWith("!!info")) {
    const currentTime = new Date();
const uptime = currentTime - startTime; 


const seconds = Math.floor(uptime / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

const formattedUptime = `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
  const start = new Date();
    message.replyMention("Calculating...").then(async msg => {
      let username;
      if(message.author.tag.endsWith("#0")) username = message.author.username;
      else username = message.author.tag
    const embed = new Discord.MessageEmbed()
    .setTitle("Info about Demeter Bot")
    .addField(`The bot has been running nonstop since`, `${formattedUptime}`, false)
    .addField("The ping of the bot is", `${Date.now() - start}ms`, false)
    .setDescription("Check <#1144239834483920957> :>")
    .setFooter(`Requested by ${username}`)
    .setTimestamp()
    await msg.edit("Done!")
    msg.edit(embed)
      })
  }

  if (message.content.startsWith("!!hardChat")) {
    if (!id.includes(message.author.id)) return message.channel.send("no.");
    const newmsg = message.content.slice(11);
    message.channel.send(`Sent ${newmsg} into demeter chat`);
    toBotChat(newmsg);
  }
  if(message.content.startsWith("!!remove")) {
    const hasRole = message.member.roles.cache.has("1144235290655993948") 
if(hasRole === true) {
    const ranks = [
    "v",
    "v+",
    "v++",
    "m",
    "m+",
    "m++",
    "hero",
  ];
    const args = message.content.split(' ')
    if(!args[1]) return
    if(ranks.includes(args[2])) {
    const userid = message.mentions.users.firstKey()
   await message.channel.send(`removed rank ${args[2]} from <@${userid}>`)
      if(args[2] === "hero") message.guild.members.cache.get(userid).roles.remove("1143437915981095023")//done
      if(args[2] === "m++") message.guild.members.cache.get(userid).roles.remove("1143438101994295326")//done
      if(args[2] === "m+") message.guild.members.cache.get(userid).roles.remove("1143449383451500564")//
      if(args[2] === "m") message.guild.members.cache.get(userid).roles.remove("1143449423687454750")//
      if(args[2] === "v++") message.guild.members.cache.get(userid).roles.remove("1143449496320213023")//done
      if(args[2] === "v+") message.guild.members.cache.get(userid).roles.remove("1143449598577352755")//
      if(args[2] === "v") message.guild.members.cache.get(userid).roles.remove("1143437589605535834")//


    }
  }
  }
  
  if(message.content.startsWith("!!set")) {
const hasRole = message.member.roles.cache.has("1144235290655993948") 
if(hasRole) {
     const ranks = [
    "v",
    "v+",
    "v++",
    "m",
    "m+",
    "m++",
    "hero",
  ];
    const args = message.content.split(' ')
    if(!args[1]) return
    if(ranks.includes(args[2])) {
const userid = message.mentions.users.first().id
const tier = args[4]
      if(!message.mentions.users.first().id) return
    const usernameuwu = args[3]
    if(!args[3]) return
    await db.set(`user_${message.mentions.users.first().id}`, usernameuwu)
            await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143423813774753832")
      await message.guild.members.cache.get(message.mentions.users.first().id).roles.remove("1158743520522281011")
      if(!tier) {
          if (args[2] === "hero") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143437915981095023");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank HERO`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[HERO] ${usernameuwu}`);
} else if (args[2] === "m++") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143438101994295326");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP++`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP++] ${usernameuwu}`);
} else if (args[2] === "m+") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449383451500564");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP+`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP+] ${usernameuwu}`);
} else if (args[2] === "m") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449423687454750");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP] ${usernameuwu}`);
} else if (args[2] === "v++") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449496320213023");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP++`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP++] ${usernameuwu}`);
} else if (args[2] === "v+") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449598577352755");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP+`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP+] ${usernameuwu}`);
} else if (args[2] === "v") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143437589605535834");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP] ${usernameuwu}`);
}
        return

      } else {
           if(tier === "I") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079734713299035")
           } else if(tier === "II") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079782209605786")
           } else if (tier === "III") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079893211856997")
           } else if(tier === "IV") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079856352297050")
           } else if (tier === "V") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079814912581695")
           } else return message.channel.send("Wtf is that tier lol")
  if (args[2] === "hero") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143437915981095023");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank HERO and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[HERO] ${usernameuwu} [${tier}]`);
} else if (args[2] === "m++") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143438101994295326");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP++ and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP++] ${usernameuwu} [${tier}]`);
} else if (args[2] === "m+") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449383451500564");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP+ and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP+] ${usernameuwu} [${tier}]`);
} else if (args[2] === "m") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449423687454750");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank MVP and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[MVP] ${usernameuwu} [${tier}]`);
} else if (args[2] === "v++") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449496320213023");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP++ and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP++] ${usernameuwu} [${tier}]`);
} else if (args[2] === "v+") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143449598577352755");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP+ and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP+] ${usernameuwu} [${tier}]`);
} else if (args[2] === "v") {
  await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143437589605535834");
  message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with rank VIP and TIER ${tier}`);
  await message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`[VIP] ${usernameuwu} [${tier}]`);
}
      }
    } else {
          const userid = args[1]
         const usernameuwu = args[2]
         if(!usernameuwu) return
         const tier = args[3]
         if(!tier) {
             message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu}`)
    db.set(`user_${message.mentions.users.first().id}`, usernameuwu)
   message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`${usernameuwu} `)
      await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143423813774753832")
            await message.guild.members.cache.get(message.mentions.users.first().id).roles.remove("1158743520522281011")
           return
         } else{
          if(tier === "I") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079734713299035")
           } else if(tier === "II") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079782209605786")
           } else if (tier === "III") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079893211856997")
           } else if(tier === "IV") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079856352297050")
           } else if (tier === "V") {
                   await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1162079814912581695")
           } else return
    message.channel.send(`set <@${message.mentions.users.first().id}> as ${usernameuwu} with TIER ${tier}`)
    db.set(`user_${message.mentions.users.first().id}`, usernameuwu)
   message.guild.members.cache.get(message.mentions.users.first().id).setNickname(`${usernameuwu} [${tier}]`)
      await message.guild.members.cache.get(message.mentions.users.first().id).roles.add("1143423813774753832")
            await message.guild.members.cache.get(message.mentions.users.first().id).roles.remove("1158743520522281011")
         }
    }
}
  }

  if (message.channel.id === "1144239834483920957") {

    if(message.author.bot) return
    const words = message.content.split(/\s+/);



    const wordCount = words.length;

    if (message.content.length >= 200) {

      return message.replyMention('Your message is too long!');

    }
    if(message.content.includes('pw') || message.content.includes('discord.gg') || message.content.includes('discord.com/invite/')) return message.replyMention('Your msg cannot include advertises')
  await  message.delete();
 
    const username = db.fetch(`user_${message.author.id}`);
    if (!username) return message.replyMention('Bro, you have to verify yourself first.')
    const messages = message.content.slice(7);
    bot.chat("[DISCORD] "+username + ": " + message.content);

 
  }
  if(message.content.startsWith("!!ban")) {
   if(!message.guild.members.cache.get(message.author.id).hasPermission("BAN_MEMBERS")) return
  const user = message.mentions.users.first()
  if(!user) return message.replyMention("mf who to ban")
    if(!message.content.includes("<@") || !message.content.includes("<@!")) return
          if(user.id === "868951014487756861") return message.replyMention("alex fck off mf")
const member = message.guild.members.cache.get(user.id)
await member.ban().then(bannedGuy => {
  message.replyMention("banned **"+ bannedGuy.user.tag+"**")
})
  }
    if(message.content.startsWith("!!kick")) {
   if(!message.guild.members.cache.get(message.author.id).hasPermission("KICK_MEMBERS")) return
  const user = message.mentions.users.first()
  if(!user) return message.replyMention("mf who to kick")
      if(user.id === "868951014487756861") return message.replyMention("alex fck off mf")
const member = message.guild.members.cache.get(user.id)
await member.kick().then(kicked => {
  message.replyMention("kicked **"+ kicked.user.tag+"**")
})
      
  }
  if(message.content.startsWith("!!purge")) {
    if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_MESSAGES")) return
    const a = parseInt(message.content.split(" ")[1])
    if(isNaN(a) || !a) return;
    if(a > 100) return message.replyMention("Cant delete over 100 message. api ratelimit dude sorry")
    try {
    await message.channel.bulkDelete(a)
      message.channel.send("<@"+message.author.id+"> deleted "+a+ " messages")
    } catch(e) {
      return
    }
  }
  if (message.content.startsWith("!!players")) {
    return message.replyMention("`!!players` was updated to slash commands! try running `/players` instead.")
  }
 
  if (message.content.includes("!!eval")) { 
    if (message.author.id !== '868951014487756861') return message.channel.send("meow")

    try {
       const args = message.content.slice(7);
      const result = eval(args)
      message.channel.send('Result:\n' + result);
    } catch (error) {
      message.channel.send('Error:\n' + error);
    }
  }
 
});

function antiAfk() {
  setInterval(() => {
    bot.look(bot.entity.yaw + 1, bot.entity.pitch, true);
  }, 300);
  bot.setControlState("forward", true);
  bot.setControlState("jump", true);
}
///////////////////////////////////////////////////////////
const messageCount = {};
let bot;

setInterval(() => {
  for (const username in messageCount) {
    messageCount[username] = null;
    console.error("Messages reset for "+ username)
  }
}, 60 * 1000);
bot = mineflayer.createBot({
  username: "demeterBot",
  host: "herobrine.org",
});//SHUBH IS GAY!
bot.on("spawn", () => {
  bot.chat("/game demeter");
})

 setInterval(() => {
    bot.chat("Join demeter survival discord https://discord.gg/cbetVWjrHT");
  }, 1200000);
const lol = true 
bot.on("messagestr", async (messagestr) => {
  if (
    messagestr.startsWith("Unable to connect to instance") ||
    messagestr.startsWith("Unable to reach instance")
  ) {
    bot.chat("/game demeter");
  }
  if (messagestr.startsWith("You were kicked from")) {
    bot.chat("/game demeter");
  }
  if (messagestr.includes("account.herobrine.org")) {
    toAutoIgnoreLog(messagestr)
    return console.error(messagestr);
  }
  if(messagestr.includes("+discordLink")) {
     bot.chat("https://discord.gg/cbetVWjrHT")
   
     }
  if(messagestr.includes("@everyone") || messagestr.includes("<@") || messagestr.startsWith("[Local]")) return
const a = messagestr.replace(/_/g, '\\_');
  toDiscordChat("- "+ a);
  setInterval(() => {
    bot.look(bot.entity.yaw + 1, bot.entity.pitch, true);
    bot.setControlState("jump", true);
    bot.setControlState("jump", false);
  }, 1000);
  bot.setControlState("forward", true);
  if(messagestr.startsWith("Please enter your pin with /pin.")) bot.chat(process.env.PIN)
});

bot.on("messagestr", async (messagestr) => {
  const ranks = [
    "[VIP]",
    "[VIP+]",
    "[VIP++]",
    "[MVP]",
    "[MVP+]",
    "[MVP++]",
    "[HERO]",
  ];
  if(messagestr.includes("voted for rewards!")) return
  const startsWithRank = ranks.some((rank) => messagestr.startsWith(rank));
  const msgarr = messagestr.split(" ");
  if (startsWithRank) {
    const username = msgarr[1];
    if (!messageCount[username]) {
      messageCount[username] = 0;
      console.log("set message count for " + username)
    }

    messageCount[username]++;

    if (messageCount[username] === 25) {
      bot.chat(`/eignore ${username}`);
      let caseNumber = db.get(`caseNumber`);

  
      if (caseNumber === null) {
        caseNumber = 0; 
      }
      db.add("caseNumber", 1);
      const embed = new Discord.MessageEmbed()
        .setTitle(`AutoIgnoreCase ${caseNumber}`)
        .setDescription(
          `${username} was autoignored by Minecraft bot because of spam. If this is a false flag pls fix`
        )
        .setTimestamp();
      toAutoIgnoreLog(embed);
    }
  }
  if (!startsWithRank) {
    const username = msgarr[0];
    if(messagestr.includes("mᴀrscraft")) {
      bot.chat("/eignore "+ username)
    }
    if (!messageCount[username]) {
      messageCount[username] = 0;
      console.log("Set message count for " + username)
    }

    messageCount[username]++;
    console.log("Username: " + username + "Count: " + messageCount[username])

    if (messageCount[username] === 20) {
      bot.chat(`/eignore ${username}`);
      let caseNumber = db.get(`caseNumber`);

      // Check if the user has any existing points (optional)
      if (caseNumber === null) {
        db.set(`casenumber`, 0); // Initialize points if none exist
      }
      db.add("caseNumber", 1);
  
      const embed = new Discord.MessageEmbed()
        .setTitle(`AutoIgnoreCase ${caseNumber}`)
        .setDescription(
          `${username} was autoignored by Minecraft bot because of spam.`
        )
        .setTimestamp();
      toAutoIgnoreLog(embed);
      db.set(`Case: ${caseNumber} Username: ${username}`, "ignored")
    }
  }
});

bot.on("end", async() => {
  process.exit(1)
});


//////////////////////////////////////////////////////
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 150000);
