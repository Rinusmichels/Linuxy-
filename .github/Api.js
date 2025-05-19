const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/whatsapp', (req, res) => {
  const { phone, message } = req.body;
  // Kirim pesan WhatsApp menggunakan API
  res.send(`Pesan dikirim ke ${phone}`);
});
