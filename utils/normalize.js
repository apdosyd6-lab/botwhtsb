function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\u0600-\u06FFa-zA-Z]/g, '')
    .replace(/(.)\1+/g, '$1');
}

module.exports = { normalize };
