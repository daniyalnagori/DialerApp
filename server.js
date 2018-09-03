var app = require('express')();
const accountSid = 'AC6ce6709a732d467433d6709ec16c854a';
const authToken = '08e202ca9190e1d53d35707ccad70feb';

const client = require('twilio')(accountSid, authToken);

app.post('/msg', function (req, res, next) {
    console.log(req.body)
    client.messages.create({
        to: req.body.numbers,
        from: '+13082103058',
        body: 'Testing for Dialer App'
    })
        .then((message) => console.log(message.sid))

    console.log('hello')
})

app.get("/get" , (req,res)=>{
 res.send({status: "RUnning"})
})
app.listen(3000, ()=>{
    console.log(`server is started ${3000}`)
})

