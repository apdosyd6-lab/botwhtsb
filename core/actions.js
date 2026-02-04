async function deleteMessage(msg) {
  await msg.delete(true);
}

async function kickUser(client, groupId, userId) {
  await client.groupParticipantsUpdate(groupId, [userId], 'remove');
}

module.exports = { deleteMessage, kickUser };
