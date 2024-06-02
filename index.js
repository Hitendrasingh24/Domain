const https = require('https');

const apiKey = 'at_LDdS5hSmKoNUVG5j6whjj85yolJ6e';
const domainsToCheck =[
  'example3sdasd.com',
  'exampleasdas4.io',
  'examplesdasd5.xyz',
  'exampleasdasd6.co',
  'NewsWave.in',
  'indiaDaily.in'
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
const boole = new Array();
  res.on('data', (d) => {
    const ar = String(d);
    if(ar.includes("MISSING_WHOIS_DATA")){
      boole.push(false);
  }
  });

  res.on('end', () => {
    if (boole.length > 0){
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

