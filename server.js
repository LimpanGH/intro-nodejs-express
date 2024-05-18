// Express klarar nuförtiden att förstå både require och import.

//const express = require("express") // Common.js moduler
import express from 'express'; // ES6 modules, inkluderar "type": "module" i package.json
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Routes - Endpoints - Behöver url + http-metod för att något ska triggas ⬇ --------------------------

// Method GET
app.get('/', (req, res) => {
  // Det som triggas kalaas för "routehandler"
  res.send("Hello from route '/'");
});

// Method POST
app.post('/whatever', (req, res) => {
  const { username, password } = req.body;
  res.json({ "username": username, "password": password });
  res.send('A POST-request');
});

// Put this object in body in Thunder-Client:
// {
//   "username": "Linus",
//   "password": "lösenord"
// }

//Method PUT
app.put('/whatever', (req, res) => {
  res.send('A PUT-request');
});

//Method DELETE
app.delete('/whatever', (req, res) => {
  res.send('A DELETE-request');
});

// Routes - Endpoints - Behöver url + http-metod för att något ska triggas ⬆ --------------------------

app.listen(PORT, () => {
  console.log(`Servern kör på http://localhost:${PORT}`);
});
