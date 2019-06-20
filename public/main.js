let result = [];
let results = [];
let phones = [];
let verified = [];
let filename;

const input = document.querySelector('input[type=file]');

//FUNCTION SPLITS AND SPACES CSV FINDING COMMAS
function splitCsv(str) {
    return str.split(',').reduce((accum, curr) => {
        if (accum.isConcatting) {
            accum.soFar[accum.soFar.length - 1] += ',' + curr
        } else {
            accum.soFar.push(curr)
        }
        if (curr.split('"').length % 2 == 0) {
            accum.isConcatting = !accum.isConcatting
        }
        return accum;
    }, {soFar: [], isConcatting: false}).soFar
}

//EXTRACTS PHONE NUMBERS FROM JSON ARRAY
function getPhones(arr){
    //arr = result
    for (let i = 0; i < arr.length; i ++) {
        if(arr[i].phone) {
            phones.push(arr[i].phone);
        }
    }
    console.log('phone numbers: ', phones);
}

//FUNCTION LISTENS TO EVENT CHANGE UPON FILE INPUT
input.addEventListener('change', function (e) {
    //GETS FILE NAME
    filename = input.files[0].name;
    document.getElementById('filename').innerHTML = 'UPLOADED FILE: ' + input.files[0].name;
    console.log(filename);

    const reader = new FileReader()
    reader.onload = function () {
        var lines_ = reader.result.split("\n");
        var headers = lines_[0].split(",");
        headers = headers.map(function (h) {
            return h.trim();
        });

        for (var i = 1; i < lines_.length; i++) {
            var obj = {};
            var currentline = splitCsv(lines_[i]);
            for (var j = 0; j < headers.length; j++) {
                if (currentline[j] !== undefined) {
                    obj[headers[j]] = currentline[j].trim();
                }
            }
            result.push(obj);
        }
        results = JSON.stringify(result);

        getPhones(result);

        verify(phones);

        const lines = reader.result.split('\n').map(function (line) {
            return line.split(',')
        });
    }
    reader.readAsText(input.files[0]);
}, false);

//FUNCTION TAKES THE PHONE NUMBERS ARE RUNS THROUGH XVERIFY
function verify(arr) {
    for(let v = 0; v < arr.length; v++) {
        if(arr[v]) {
        const Url = 'http://www.xverify.com/services/phone/verify/?phone=' + arr[v] + '&type=json&apikey=1013219-CBA2827D&domain=agentzip.com';

        fetch(Url)
            .then(data => { return data.json() })
            .then(res => { 
                verified.push(res);
            })
            .catch(error => { console.log('Error: ', error)})
        } 
    }
    console.log('verified: ', verified);
}











