const express = require('express');
const app = express();
const path = require('path');
const val = require('./mongoconnection/mongos.js');
const cors = require('cors');
val();

// const bodyParser = require('body-parser');
// const cors = require('cors');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.json("server started...")
})

app.use('/rout',require('./routes/routes_user'));
app.use('/routpost',require('./routes/post'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server is running....');
})