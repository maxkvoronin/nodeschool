const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], 'utf8', (err, list) => {
  list.forEach(fileName => {
    if (path.extname(fileName).slice(1) === process.argv[3])
      console.log(fileName);
  });
});