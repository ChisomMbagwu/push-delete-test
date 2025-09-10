require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 1234;
const DB = process.env.DB_URI;
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/api/v1', userRouter);

mongoose.connect(DB).then(() => {
    console.log("Connected to the Database");

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
})

.catch((error) => {
    console.log('Errror connecting to Database', error.message)
});