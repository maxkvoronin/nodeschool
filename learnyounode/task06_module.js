const fs = require('fs');
const path = require('path');

module.exports = (dir, mask, callback) => { 
  fs.readdir(dir, 'utf8', (err, list) => {
    const data = [];
    if (err) {
      return callback(err);
    }
    list.forEach(fileName => {
      if (path.extname(fileName).slice(1) === mask) {
        data.push(fileName);
      }
    });
    
    return callback(null, data);
  });
  
}

