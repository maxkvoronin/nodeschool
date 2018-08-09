const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if(err) {
    console.log(`error reading file ${process.argv[2]}: ${err}`);
    return err;
  } else {
    const lines = data.split('\n').length - 1;
    console.log(lines);
  }
});