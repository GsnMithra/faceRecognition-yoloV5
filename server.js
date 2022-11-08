const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require('passport');
const cors = require('cors');

const user = require('./routing/api/users');

app.use(cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

app.use(
    bodyParser.urlencoded( {extended: false} )
    );
app.use(bodyParser.json());
    
const dataBase = require('./configuration/mongoURI').mongoURI;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dataBase, connectionParams)
    .then(() => console.log('Atlas-Server connected...!'))
    .catch((e) => console.log(`Error connecting to the database...! ${e}`))

app.use(passport.initialize());
require("./configuration/passports")(passport);
app.use("/api/users", user);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on PORT: ${port}`))