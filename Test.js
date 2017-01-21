// Twilio Credentials
var accountSid = 'AC87b33b99abdbf60842b57ebcac3b0a73';
var authToken = '9a106c6c08499c61fb2c7b4a78bfe593';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+16085040717",
    from: "+16085711097",
    body: "Did you get this?",
}, function(err, message) {
    console.log(message.sid);
});
