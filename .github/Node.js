const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Halo, ini pesan dari API!',
    from: 'whatsapp:your_business_phone_number',
    to: 'whatsapp:recipient_phone_number'
  })
  .then(message => console.log(message.sid))
  .done();
```
