const request = require('request');

const phone = '18588886399';
const key = 'vtow7z0dzhbfvtfzbvbdxerf';
let first_name;
let last_name;
let email;
const url = 'http://api.pipl.com/search/?first_name=' + first_name + '&last_name=' + last_name + '&email=' + email + '&key=' + key;

request({ url: url, json:true }, (err, res)=> {
    console.log(res.body);
})