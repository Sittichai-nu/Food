const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));


}

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/order', require('./routes/api/order'));

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) =>
      res.sendFile(path.join(__dirname, "./client/build/index.html"))
    );
  }
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foods", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
// .then(() => console.log('DB Connected...'));

const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});