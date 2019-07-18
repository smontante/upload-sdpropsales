// import { type } from "os";

let result = [];
let results = [];
let typeform = {};

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

        typeform = {
                score: result[i].score,
                full_name: result[i].full_name,
                first: result[i].first,
                last: result[i].last,
                area: result[i].area,
                city: result[i].city,
                state: result[i].state,
                zip: result[i].zip,
                phone: result[i].phone,
                email: result[i].email,
                phone2: result[i].phone2,
                email2:result[i].email2,
                phone3: result[i].phone3,
                email3: result[i].email3,
                credit: result[i].credit,
                credit2: result[i].credit2,
                beds: result[i].beds,
                baths: result[i].baths,
                credit_select: result[i].credit_select,
                features: result[i].features,
                wants: result[i].wants,
                price: result[i].price,
                timeframe: result[i].timeframe,
                selling: result[i].selling,
                sellingzip: result[i].sellingzip,
                own_rent: result[i].own_rent,
                housing_payment: result[i].housing_payment,
                found_a_home: result[i].found_a_home,
                address: result[i].address,
                has_realtor: result[i].has_realtor,
                decided_price: result[i].decided_price,
                requested_price: result[i].requested_price,
                price_range: result[i].price_range,
                va: result[i].va,
                down_payment: result[i].down_payment,
                any_credit_issue: result[i].any_credit_issue,
                income: result[i].income,
                credit_repair: result[i].credit_repair,
                call_me: result[i].call_me,
                when_to_call: result[i].when_to_call,
                time_to_call: result[i].time_to_call,
                am_or_pm: result[i].am_or_pm,
                id: result[i].id,
                airtable: result[i].airtable,
                fb: result[i].fb
            }

            const options ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(typeform),
            }
        fetch('/typeform', options); 
        } 
        alert('File has been sent!')
    });


}, false);
















