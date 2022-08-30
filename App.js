const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const routerApi = require('./routes/api')  
const bodyParser = require("body-parser");
const path = require("path");



mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(() => {
    console.log("MongoDB connected");
    
}).catch((err) => { console.log("err:" + err) })


app.use(bodyParser.json())
app.use(cors())
app.use(express.static(
    path.join(__dirname,"build")));
    

app.use('/',routerApi)


app.listen(process.env.PORT, () => {
    console.log('listening !!!!!!!');

})





