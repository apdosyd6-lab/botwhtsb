const { normalize } = require('../utils/normalize');
const { addWarning } = require('./warnings');
const { deleteMessage, kickUser } = require('./actions');
const { handleCommands } = require('./commands');

const badWords = [/كلب/, /حمار/, /غبي/, /زب/, /شرموط/];

async function checkMessage(msg, client) {
  if (msg.body.startsWith('!')) {
    return handleCommands(msg, client);
  }

  const text = normalize(msg.body);

  for (let word of badWords) {
    if (word.test(text)) {
      await deleteMessage(msg);

      const warnings = addWarning(msg.from, msg.author);
      if (warnings >= 2) {
        await kickUser(client, msg.from, msg.author);
      } else {
        msg.reply(`⚠️ تحذير (${warnings}/2)\n🚫 ممنوع الشتائم`);
      }
      return;
    }
  }

  if (/https?:\/\//.test(text)) {
    await deleteMessage(msg);
    msg.reply('🚫 الروابط ممنوعة');
  }
}

module.exports = { checkMessage };
