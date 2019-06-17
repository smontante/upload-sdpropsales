const request = require('request');

const phone = '18588886399';
const auth_token = 'AU28cd515d18f9437a9da23d08b3137feb';
const account_sid = 'AC603f41f2bb2a4c01abf59bd3b861eb0a';
const returnData = 'name,address,location,cnam,carrier,carrier_o,gender,linetype,image,line_provider,profile';
const url = 'https://api.everyoneapi.com/v1/phone/+' + phone + '?account_sid=' + account_sid + '&auth_token=' + auth_token + '&data=' + returnData;

request({ url: url, json:true }, (err, res)=> {
    console.log(res.body);
})