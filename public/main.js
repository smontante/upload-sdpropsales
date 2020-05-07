// import { type } from "os";

let result = [];
let results = [];
let sellers = {};

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
    }, { soFar: [], isConcatting: false }).soFar
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

            sellers = {
                address: result[i].address,
                asset_condition: result[i].asset_condition,
                baths: result[i].baths,
                beds: result[i].beds,
                cc_1: result[i].cc_1,
                cc_2: result[i].cc_2,
                cc_3: result[i].cc_3,
                contact_person: result[i].contact_person,
                deal_status: result[i].deal_status,
                dnc_status: result[i].dnc_status,
                dnc_status_2: result[i].dnc_status_2,
                eb_1: result[i].eb_1,
                eb_2: result[i].eb_2,
                eb_3: result[i].eb_3,
                email: result[i].email,
                email_2: result[i].email_2,
                equity: result[i].equity,
                lead_level: result[i].lead_level,
                lead_type: result[i].lead_type,
                mailing_address: result[i].mailing_address,
                name: result[i].name,
                phone: result[i].phone,
                phone_2: result[i].phone_2,
                rvm_1: result[i].rvm_1,
                rvm_2: result[i].rvm_2,
                rvm_3: result[i].rvm_3,
                sq_feet: result[i].sq_feet,
                stage: result[i].stage,
                take_off_list: result[i].take_off_list,
                tmb_1: result[i].tmb_1,
                tmb_2: result[i].tmb_2,
                tmb_3: result[i].tmb_3,
                value: result[i].value
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sellers),
            }
            fetch('/sellers', options);
        }
        alert('File has been sent!')
    });


}, false);
















