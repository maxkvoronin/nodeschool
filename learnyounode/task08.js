const http = require('http');

http.get(process.argv[2], res => {
  let data = new String();
  
  res.setEncoding('utf8');

  res.on('data', chunk => {
    data+=chunk;
  });

  res.on('end', () => {
    console.log(`${data.length}\n${data}`);
  });

  res.on('error', err => {
    console.log(err);
  });

}).on('error', err => {
  console.log(err);
});
