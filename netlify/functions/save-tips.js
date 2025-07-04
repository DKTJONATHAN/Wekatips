const fs = require('fs');

exports.handler = async (event) => {
  // Verify secret phrase
  if (event.headers['x-secret'] !== 'weka123') {
    return { statusCode: 401, body: 'Invalid secret' };
  }

  // Save the new tips
  fs.writeFileSync('public/data/tips.json', event.body);
  
  return { statusCode: 200, body: 'Tips updated!' };
};