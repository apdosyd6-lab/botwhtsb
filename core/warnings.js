const fs = require('fs');
const path = './data/warnings.json';

function load() {
  if (!fs.existsSync(path)) return {};
  return JSON.parse(fs.readFileSync(path));
}

function save(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function addWarning(groupId, userId) {
  const data = load();

  if (!data[groupId]) data[groupId] = {};
  if (!data[groupId][userId]) data[groupId][userId] = 0;

  data[groupId][userId]++;
  save(data);

  return data[groupId][userId];
}

module.exports = { addWarning };
