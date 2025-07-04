const fs = require('fs');

exports.handler = async (event) => {
  // Verify secret phrase
  if (event.headers['x-secret'] !== 'weka123') {
    return { statusCode: 401, body: 'Invalid secret' };
  }

  try {
    // Save to public directory
    fs.writeFileSync('public/data/tips.json', event.body);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Tips updated successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save tips' })
    };
  }
};