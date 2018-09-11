// var app = require('express')();
// const bodyParser = require('body-parser');

// const accountSid = 'AC6ce6709a732d467433d6709ec16c854a';
// const authToken = '08e202ca9190e1d53d35707ccad70feb';
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

// const client = require('twilio')(accountSid, authToken);

// const VoiceResponse = require('twilio').twiml.VoiceResponse;
// // app.post('/msg', function (req, res, next) {
// //     console.log(req.body.numbers)
// //     return client.messages.create({
// //         to: req.body.numbers,
// //         from: '+13082103058',
// //         body: 'Testing for Dialer App'
// //     })
// //         .then((message) => {

// //             console.log(message.sid)
// //             res.send('success!');
// //         }).catch((e) => {
// //             console.log(e.message)
// //         })
// //     console.log('hello')
// // })


// app.post('/call', function (req, res, next) {
//     console.log(req.body)
//     return client.calls
//         .create({
//             url: 'http://demo.twilio.com/docs/voice.xml',
//             to: req.body.CallNumber,
//             from: '+13082103058'
//         })
//         .then(call => {
//             console.log(call.sid)
//             res.send(call.sid)
//         }).catch((e) => {
//             console.log(e.message)
//         })


//     console.log('hi')
// })


// app.post('/voice', (request, response) => {
//     const twiml = new VoiceResponse();
//     console.log(twiml)
//     twiml.say({ voice: 'alice' }, 'hello world!');

//     response.type('text/xml');
//     response.send(twiml.toString());
// });


// app.get("/get", (req, res) => {
//     res.send({ status: "RUnning" })
// })



const http = require('http');
const express = require('express');
var cors = require('cors')
const ClientCapability = require('twilio').jwt.ClientCapability;

const app = express();

app.use(cors())

app.get('/token', (req, res) => {
    // put your Twilio API credentials here
    const accountSid = 'AC6ce6709a732d467433d6709ec16c854a';
    const authToken = '08e202ca9190e1d53d35707ccad70feb';

    // put your Twilio Application Sid here
    const appSid = 'AP84a57d90641514aacc7ca95bc417accc';

    const capability = new ClientCapability({
        accountSid: accountSid,
        authToken: authToken,
    });
    capability.addScope(
        new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
    );
    capability.addScope(new ClientCapability.IncomingClientScope('joey'));
    const token = capability.toJwt();

    res.set('Content-Type', 'application/json');
    res.json(token);
});

app.post('/voice', (req, res) => {
    // TODO: Create TwiML response
});

http.createServer(app).listen(3000, '192.168.100.25');
console.log('Twilio Client app server running at http://127.0.0.1:1337/token/');