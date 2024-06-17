// src/loaders/glsl-tokenizer-loader.js
const tokenizer = require('glsl-tokenizer')

module.exports = function (source) {
  const tokens = tokenizer(source);
  const result = JSON.stringify(tokens);
  return `export default ${result};`;
};
