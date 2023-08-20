const express = require("express");
// const ErrorHandler = require("./utilis/ErrorHandler");
const ErrorHandler = require('./middleware/error')
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require("cors"); 

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, 
  }));
app.use(express.json())
app.use(cookieParser())
// to upload our images and store in root directory file and to access folder image
app.use('/', express.static("uploads"))
app.use(bodyParser.urlencoded({extended: true, limit:'50mb'}))







// config 
if(process.env.NODE_ENV !== "PRODUCTION" ){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


// import routes
const user = require('./controller/user');
app.use('/api/v2/user', user)

// Error handling

app.use(ErrorHandler)


// export our app and receive in from our server
module.exports = app;


