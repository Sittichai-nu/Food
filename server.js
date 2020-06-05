const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.get('/', (req, res) => res.send('Api runnig'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foods", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'));

const PORT = process.env.PORT || 1000;

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});