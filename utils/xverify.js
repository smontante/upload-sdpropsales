//EXTRACTS PHONE NUMBERS FROM JSON ARRAY
// function getPhones(arr){
//     //arr = result
//     for (let i = 0; i < arr.length; i ++) {
//         if(arr[i].phone) {
//             phones.push(arr[i].phone);
//         }
//     }
//     console.log('phone numbers: ', phones);
// }

//FUNCTION TAKES THE PHONE NUMBERS ARE RUNS THROUGH XVERIFY
// function verify(arr) {
//     for(let v = 0; v < arr.length; v++) {
//         if(arr[v]) {
//         const Url = 'http://www.xverify.com/services/phone/verify/?phone=' + arr[v] + '&type=json&apikey=1013219-CBA2827D&domain=agentzip.com';

//         fetch(Url)
//             .then(data => { return data.json() })
//             .then(res => { 
//                 verified.push(res);
//             })
//             .catch(error => { console.log('Error: ', error)})
//         } 
//     }
//     console.log('verified: ', verified);
// }