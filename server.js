let MongoClient = require("mongodb").MongoClient;
let express = require('express');
let path = require("path");
let router = require("./routes/cows");
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;


app.use(bodyParser.json())
//statically servers files from build folder
app.use(express.static(path.join(__dirname, "/build")));

MongoClient.connect("mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb", { useNewUrlParser: true }).then(client => {
    console.log('DB connected');
    // avaiable everywhere in app
    app.locals.db = client.db("cow");
}).catch(err => {
    console.log(err);
});

app.get('/', (req, res) =>{
  res.render("index");
})

app.use('/api', router);

app.listen(PORT, () =>{
  console.log(`Port is running on ${PORT}`);
})