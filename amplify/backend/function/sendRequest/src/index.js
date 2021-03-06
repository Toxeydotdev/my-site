const http = require('https')
exports.handler = async (event) => {
    return httprequest().then((data) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                "Access-Control-Allow-Methods": "GET"
            },
            body: JSON.stringify(data),
        };
        return response;
    });
};
function httprequest() {
    return new Promise((resolve, reject) => {
        const options = {
            host: 'jsonplaceholder.typicode.com',
            path: '/todos',
            port: 443,
            method: 'GET'
        };
        const req = http.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });
            res.on('end', function () {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch (e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
            reject(e.message);
        });
        // send the request
        req.end();
    });
}

// exports.handler = async (event) => {
//     // TODO implement
//     const body = {
//         info: "Hello from Dat azz",
//         date: new Date(Date.now()),
//         passCon: event
//     }
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify(body),
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//         }
//     };
//     return response;
// };
