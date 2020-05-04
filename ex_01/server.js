const express = require('express');
const app = express();

process.env.NODE_ENV = 'development';
//je l'ai quand meme preciser meme si ca lai par defaut cetait pour savoir comment ca se passer pour basculer de prod a dev
//meme si je pense que jaurais du le mettre dans le fichier de confg mais je ne connais pas encore la communication des fichiers


app.listen(4242);