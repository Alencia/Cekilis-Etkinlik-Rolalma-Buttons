const { Discord, MessageEmbed ,Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const cfg = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: cfg.bot.BotDurum }, status: "online" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
 })
client.on("message", (message) => {
if (message.content !== cfg.bot.buttonlaraktifet || message.author.id === cfg.bot.BotOwner || message.author.bot) return;
client.on("ready", () => {
  client.channels.cache.get(cfg.bot.BotSes).join();
  console.log(`BOT: ${client.user.username} Ses Kanalına Giriş Yaptı`);
})
let CekilisKatılımcı = new MessageButton()
  .setStyle(cfg.renk.button1) 
  .setLabel(cfg.botText.cekiliskatilimcisitext) 
  .setID('CekilisKatılımcı'); 
let EtkinlikKatılımcı = new MessageButton()
  .setStyle(cfg.renk.button2) 
  .setLabel(cfg.botText.etkinlikatilimcisitext) 
  .setID('EtkinlikKatılımcı');
message.channel.send(`
Merhaba ${cfg.bot.Sunucuİsmi} üyeleri,
Çekiliş katılımcısı alarak ${cfg.Emojiler.Nitro} , ${cfg.Emojiler.Spotify} , ${cfg.Emojiler.Netfilx} , ${cfg.Emojiler.Exxen} , ${cfg.Emojiler.BlueTv}  gibi çeşitli ödüllerin sahibi olabilirsiniz.
Etkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.

__Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__ ${cfg.EveryoneHere.Everyone} ${cfg.EveryoneHere.Here}
`, { 
  buttons: [ CekilisKatılımcı, EtkinlikKatılımcı ]
});
});

client.on('clickButton', async (button) => {
    if (button.id === 'CekilisKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.CekilisKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit(`<@&${cfg.roles.CekilisKatılımcı}> Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit(`<@&${cfg.roles.CekilisKatılımcı}> Rolü Üzerinize Verildi!`)
        }}
    if (button.id === 'EtkinlikKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.EtkinlikKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`<@&${cfg.roles.EtkinlikKatılımcı}> Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`<@&${cfg.roles.EtkinlikKatılımcı}> Rolü Üzerinize Verildi!`)
        }}});
client.login(cfg.bot.token);