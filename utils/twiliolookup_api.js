// const accountSid = 'AC9eeff296f6bd260dc18f2fd7f6d1db4b';
// const authToken = 'e952ec11692a534441d364669a7009b6';
// const client = require('twilio')(accountSid, authToken);

// client.lookups.phoneNumbers('+18588886399')
//               .fetch({countryCode: 'US'})
//               .then(phone_number => console.log(phone_number.callerName));


const accountSid = 'ACbb0b5c8a06789468918e0c621d0e202f';
const authToken = 'd11f8f9f656960244df7587965854a6c';
const client = require('twilio')(accountSid, authToken);
              
    client.lookups.phoneNumbers('+18588886399')
        .fetch({addOns: 'whitepages_pro_caller_id',
                type: 'carrier'
            })
        .then(phone_number => console.log(phone_number.addOns), console.log(phone_number.carrier));