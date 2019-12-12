const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const port = 3000;
const methodOverride = require("method-override")

//Database
mongoose.connect("mongodb://localhost/kahoot_tracking", { 
    useNewUrlParser: true,
    useUnifiedTopology: true //use new Server Discover and Monitoring engine
});

//Promise library
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {console.log(error)});

//Method Override to use http verbs other than "post" & "get"
app.use(methodOverride("_method", { methods: ["POST", "GET"] }))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Routes
app.use(routes);

//Port
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});
