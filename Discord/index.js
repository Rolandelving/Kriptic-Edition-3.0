const { Client, GatewayIntentBits, ChannelType } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

/* HARD CODED */
const TOKEN = "MTQ2MjU5OTY5OTMzMTU1MTQ1Ng.GikFET.wsagwZBeC1vc6g3q0VGLyP-HTJogCdfLJo67fM";
const LOBBY_CHANNEL_ID = "1462643334966280235";
/* HARD CODED */

const tempChannels = new Set();

client.on("voiceStateUpdate", async (oldState, newState) => {
  if (
    newState.channelId === LOBBY_CHANNEL_ID &&
    oldState.channelId !== LOBBY_CHANNEL_ID
  ) {
    const channel = await newState.guild.channels.create({
      name: `${newState.member.user.username}'s VC`,
      type: ChannelType.GuildVoice,
      parent: newState.channel.parent
    });

    tempChannels.add(channel.id);
    await newState.setChannel(channel);
  }

  if (
    oldState.channel &&
    tempChannels.has(oldState.channel.id) &&
    oldState.channel.members.size === 0
  ) {
    tempChannels.delete(oldState.channel.id);
    await oldState.channel.delete();
  }
});

client.login(TOKEN);
