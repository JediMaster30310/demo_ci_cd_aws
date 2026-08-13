const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Helloo from CI/CD pipeline! key pair issue '));

app.listen(3000);
