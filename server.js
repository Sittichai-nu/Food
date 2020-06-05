const express = require("express");

const app = express();

app.get('/', (req, res) => res.send('Api runnig'));

const PORT = process.env.PORT || 1000;

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});