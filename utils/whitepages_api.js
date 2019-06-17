const request = require('request');

const phone = '18588886399';
const key = 'd1bf4b85f80245fc853df31d75bb90ce';
const url = 'https://proapi.whitepages.com/3.0/phone?phone=' + phone + '&api_key=' + key;

request({ url: url, json:true }, (err, res)=> {
    console.log(res.body);
})