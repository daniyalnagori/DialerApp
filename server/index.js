var app = require('express')();
const bodyParser = require('body-parser');

const accountSid = '';
const authToken = '';
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const client = require('twilio')(accountSid, authToken);

const VoiceResponse = require('twilio').twiml.VoiceResponse;
// app.post('/msg', function (req, res, next) {
//     console.log(req.body.numbers)
//     return client.messages.create({
//         to: req.body.numbers,
//         from: '+13082103058',
//         body: 'Testing for Dialer App'
//     })
//         .then((message) => {

//             console.log(message.sid)
//             res.send('success!');
//         }).catch((e) => {
//             console.log(e.message)
//         })
//     console.log('hello')
// })


app.post('/call', function (req, res, next) {
    console.log(req.body)
    return client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: req.body.CallNumber,
            from: '+13082103058'
        })
        .then(call => {
            console.log(call.sid)
            res.send(call.sid)
        }).catch((e) => {
            console.log(e.message)
        })


    console.log('hi')
})


app.post('/voice', (request, response) => {
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' }, 'hello world!');

    response.type('text/xml');
    response.send(twiml.toString());
});


app.get("/get", (req, res) => {
    res.send({ status: "RUnning" })
})
app.listen(3000, () => {
    console.log(`server is started ${3000}`)
})
