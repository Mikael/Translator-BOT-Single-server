const translate = require('@vitalets/google-translate-api');

exports.translatetext = function(text, fromlang, tolang, callback) {
  try {
    translate(text, { from: fromlang, to: tolang }).then(res => {
      callback(null, `${res.text} | Language translated from: ${res.from.language.iso}`);
    }).catch(err => {
      callback(null, err);
    });
  } catch (error) {
    callback(null, error);
  }
};