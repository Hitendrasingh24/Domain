const https = require('https');

const apiKey = 'at_LDdS5hSmKoNUVG5j6whjj85yolJ6e';
const domainsToCheck = [
  'google.com',
  'axsolab.com',
  'example3sdasd.com',
  'exampleasdas4.io',
  'examplesdasd5.xyz',
  'exampleasdasd6.co'
]; // Replace with your desired domains

const availableDomains = [];


function Availability(domainName) {
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
    numbers.push(ar.length)
  });

  res.on('end', () => {
    if (numbers.length< 10){
      console.log(domainName)
    }
  });
});
req.on('error', (error) => {
  console.error(error);
});
req.end();
}
domainsToCheck.forEach(Availability);
