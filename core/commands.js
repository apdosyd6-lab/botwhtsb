const { kickUser } = require('./actions');

async function handleCommands(msg, client) {
  const text = msg.body;

  if (text.startsWith('!طرد')) {
    if (!msg.mentionedIds.length) {
      return msg.reply('❌ منشن الشخص');
    }

    await kickUser(client, msg.from, msg.mentionedIds[0]);
    msg.reply('🚫 تم الطرد');
  }

  if (text === '!القوانين') {
    msg.reply(`
📜 قوانين المجموعة:
1️⃣ ممنوع الشتائم
2️⃣ ممنوع الروابط
3️⃣ احترام الجميع
⚠️ تحذيرين = طرد
    `);
  }

  if (text === '!منشن') {
    const chat = await msg.getChat();
    let mentions = [];
    let message = '📢 منشن للجميع:\n';

    for (let p of chat.participants) {
      mentions.push(p.id._serialized);
      message += `@${p.id.user} `;
    }

    await chat.sendMessage(message, { mentions });
  }
}

module.exports = { handleCommands };
