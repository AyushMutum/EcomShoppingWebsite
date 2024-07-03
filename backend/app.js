const express = require("express");
// const ErrorHandler = require("./utilis/ErrorHandler");
const ErrorHandler = require('./middleware/error')
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require("cors"); 
const path = require("path")


app.use(cors({
    origin: "https://ecom-shopping-website-uwx1-52a6c90hw-ayushmutums-projects.vercel.app/",
    credentials: true, 
  }));
  
app.use(express.json())
app.use(cookieParser())

// to upload our images and store in root directory file and to access folder image
app.use('/', express.static(path.join(__dirname,"./uploads")))

app.get('/test', (req, res) => {
    res.send("Hello World!");
});


app.use(bodyParser.urlencoded({extended: true, limit:'50mb'}))

// config 
if(process.env.NODE_ENV !== "PRODUCTION" ){
    require("dotenv").config({
        path:"config/.env"
    })
}

// import routes
const user = require('./controller/user');
const shop = require('./controller/shop');
const product = require('./controller/product');
const event = require('./controller/event')
const coupon = require('./controller/coupounCode')
const payment = require('./controller/payment')
const order = require('./controller/order')
const conversation = require('./controller/conversation')
const message = require('./controller/message')



app.use('/api/v2/user', user)
app.use('/api/v2/order', order)
app.use('/api/v2/shop', shop)
app.use('/api/v2/product', product)
app.use('/api/v2/event', event)
app.use('/api/v2/coupon', coupon)
app.use('/api/v2/payment', payment)
app.use('/api/v2/conversation', conversation)
app.use('/api/v2/message', message)


// Error handling

app.use(ErrorHandler)

// export our app and receive in from our server
module.exports = app;

