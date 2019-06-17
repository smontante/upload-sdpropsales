let results; 

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

const input = document.querySelector('input[type=file]');
input.addEventListener('change', function (e) {
    // console.log('UPLOAD RESPONSE: ', input.files)
    const reader = new FileReader()
    reader.onload = function () {
        var lines_ = reader.result.split("\n");
        var result = [];
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
        console.log('JSON Results: ', results);
        console.log('Phone Test: ', result[3].phone);

        // for(let p = 0;  p < result.length; p++) {
        //     console.log('Name: ', result[p].name, 'Phone: ', result[p].phone); 
        // }
        
        function getPhones(arr) {
            for(let p = 0; p < arr.length; p++) {
                results = result[p].phone;
            }
            console.log(results);
            return results;
        }

        const lines = reader.result.split('\n').map(function (line) {
            return line.split(',')
        });
    }
    reader.readAsText(input.files[0]);

    getPhones(result);
    
}, false);




