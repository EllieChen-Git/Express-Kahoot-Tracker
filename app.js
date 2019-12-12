const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/kahoot_tracking", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {console.log(error)});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});
