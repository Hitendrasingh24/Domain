const https = require('https');

const apiKey = 'at_LDdS5hSmKoNUVG5j6whjj85yolJ6e';
const domainName = 'google.com';

const options = {
  hostname: 'www.whoisxmlapi.com',
  port: 443,
  path: `/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domainName}`,
  method: 'GET',
};

const req = https.request(options, (res) => {
const numbers = new Array();
  res.on('data', (d) => {
    const ar = String(d);
    // process.stdout.write(ar);
    numbers.push(ar.length)
  });

  res.on('end', () => {
    if (numbers.length> 10){
        console.log("OPPS! domain is taken")
    }
    else{
        console.log("domain is available")
    }
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();

