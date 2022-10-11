const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ConnectDB = require('./db');
const ActionsDB = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

ConnectDB();

app.get('/', (req, res) => {
    const docs = JSON.stringify(ActionsDB('users', 'users', 'find', {}));
    for (let doc in docs) {
        res.send(doc);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));