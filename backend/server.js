const express = require('express');
const cors = require('cors')
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB()

const port = process.env.PORT || 5000;


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler);
app.use(express.static('public'));

// app.listen(port, () => console.log(`Server started on port ${port}`));
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
   });
   