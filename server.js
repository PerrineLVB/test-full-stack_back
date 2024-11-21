const express = require('express');
const connectDB = require('./db'); // Assurez-vous que le chemin est correct
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Définir le port
const port = process.env.PORT;
app.set('port', port);

// Route de test
app.get('/', (req, res) => res.send('API Running'));

// Démarrer le serveur
app.listen(port, () => console.log(`Server started on port ${port}`));