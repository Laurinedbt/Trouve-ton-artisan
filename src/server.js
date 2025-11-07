const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion BDD

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trouve_ton_artisan'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur connexion MySQL:', err);
    } else {
        console.log('Connecté à la base MySQL');
    }
});

// Démarrage serveur

app.listen(port, () => {
    console.log('Server app listening on port' + port);
});