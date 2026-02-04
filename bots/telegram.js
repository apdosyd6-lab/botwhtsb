const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TG_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, '🤖 بوت التحكم شغال');
});

bot.onText(/\/status/, msg => {
  bot.sendMessage(msg.chat.id, '✅ بوت الواتساب متصل');
});

module.exports = bot;
