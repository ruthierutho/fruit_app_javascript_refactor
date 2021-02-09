const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());
app.use(cors());


MongoClient.connect('mongodb+srv://ruth:ruth123@cluster0.5eooe.mongodb.net/fruits?retryWrites=true&w=majority')
    .then((client) => {
        const db = client.db('fruits');
        const fruitsCollection = db.collection('fruits');
        const fruitsRouter = createRouter(fruitsCollection);
        app.use('/api/fruits', fruitsRouter);
    })
    .catch(console.err);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(3000, function () {
    console.log(`Listening on port ${this.address().port}`);
});
