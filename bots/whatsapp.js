const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { checkMessage } = require('../core/checker');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  console.log('📱 امسح QR من واتساب');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ بوت الواتساب شغال');
});

client.on('message', async msg => {
  if (!msg.isGroupMsg) return;
  await checkMessage(msg, client);
});

module.exports = client;
