const http = require('http');

function getUrl(url, cb) {
  http.get(url, res => {
    let data = new String();
    
    res.setEncoding('utf8');
    res.on('data', chunk => {
      data+=chunk;
    });
  
    res.on('end', () => {
      cb(null, data);
    });
  
    res.on('error', err => {
      cb(err);
    });
  }).on('error', err => {
    cb(err);
  });
}


getUrl(process.argv[2], (err, data) => {
  if (err) console.error(err);
  else {
    console.log(data);
    getUrl(process.argv[3], (err, data) => {

      if (err) console.error(err);
      else {
        console.log(data);
        getUrl(process.argv[4], (err, data) => {

          if (err) console.error(err);
          else {
            resdata+=data;
            console.log(data);
          }
        });
      }
    });
  }
});
