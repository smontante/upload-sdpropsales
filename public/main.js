let result = [];
let results = [];
let phones = [];
let verified = [];
let caLead = {};
let flLead = {};
let nvLead = {};

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
                primary_phone: result[i].primary_phone,
                secondary_phone: result[i].secondary_phone,
                property_address: result[i].property_address,
                price_range: result[i].price_range,
                min_bedrooms: result[i].min_bedrooms,
                min_bathrooms: result[i].min_bathrooms,
                city: result[i].city,
                state: result[i].state,
                how_soon: result[i].how_soon,
                reason_for_buying: result[i].reason_for_buying,
                loan_status: result[i].loan_status,
                down_payment: result[i].down_payment,
                property_type: result[i].property_type,
                credit_rating: result[i].credit_rating,
                last_updated: result[i].last_updated,
                additional_info: result[i].last_updated,
                source_file: result[i].source_file,
                source: result[i].source
            }

            const options ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lead),
            }
        fetch('/nevada', options); 
        } 
        alert('File has been sent!')
    });


}, false);
















