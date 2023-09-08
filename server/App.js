const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const AppRouter = require('./routes/AppRouter');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', AppRouter);

const PORT = 4010;
const MONGO_DB_URI = "mongodb://localhost:27017/netflixpage02";
mongoose.connect(MONGO_DB_URI).then(() => {
    console.log('db connected successfully');
    app.listen(PORT, () => {
        console.log('Server is running on PORT', PORT);
    })
}).catch(() => {
    console.log(error);
});
