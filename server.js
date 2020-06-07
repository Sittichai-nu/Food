const express = require("express");
const mongoose = require("mongoose");


const app = express();

// app.get('/', (req, res) => res.send('Api runnig'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foods", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected...'));

const PORT = process.env.PORT || 3210;

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});