const fs = require('fs');

try {
  const file = fs.readFileSync(process.argv[2], 'utf-8');
  const lines = file.split('\n').length - 1;
  console.log(lines);
}
catch (err) {
  console.log(`error reading file ${process.argv[2]}: ${err}`);
}