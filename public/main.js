let result = [];
let results = [];
let phones = [];
let verified = [];
let lead = {};

const btn = document.querySelector('#submit');
const filetitle = document.querySelector('#filetitle');
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

//FUNCTION LISTENS TO EVENT CHANGE UPON FILE INPUT
input.addEventListener('change', function (e) {
    filename = input.files[0].name;
    filetitle.innerHTML = 'UPLOADED FILE: ' + input.files[0].name;

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

        const lines = reader.result.split('\n').map(function (line) {
            return line.split(',')
        });
        
        results = JSON.stringify(result);
    }
    reader.readAsText(input.files[0]);
    console.log('results testing: ', result);

    btn.addEventListener('click', () => {
        for (let i = 0; i < result.length; i++) {
            lead = {
                name: result[i].name,
                email: result[i].email,
                phone: result[i].phone,
                city: result[i].city,
                state: result[i].state,
                zip: result[i].zip,
                company: result[i].company
            }

            const options ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lead),
            }
        fetch('/upload', options); 
        } 
        alert('File has been sent!')
    });


}, false);
















