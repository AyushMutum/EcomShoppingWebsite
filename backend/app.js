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
app.use('/',(res,req) => {
    res.send("Hello World!")
})
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


// const express = require("express");
// const ErrorHandler = require('./middleware/error');
// const app = express();
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const cors = require("cors");

// // CORS configuration
// const allowedOrigins = process.env.NODE_ENV === 'PRODUCTION' ? ["https://your-vercel-domain.vercel.app"] : ["http://localhost:3000"];
// app.use(cors({
//     origin: allowedOrigins,
//     credentials: true,
// }));

// app.use(express.json());
// app.use(cookieParser());
// app.use('/', express.static("uploads"));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// // Config environment variables
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//         path: "backend/config/.env"
//     });
// }

// // Import routes
// const user = require('./controller/user');
// const shop = require('./controller/shop');
// const product = require('./controller/product');
// const event = require('./controller/event');
// const coupon = require('./controller/coupounCode');
// const payment = require('./controller/payment');
// const order = require('./controller/order');
// const conversation = require('./controller/conversation');
// const message = require('./controller/message');

// app.use('/api/v2/user', user);
// app.use('/api/v2/order', order);
// app.use('/api/v2/shop', shop);
// app.use('/api/v2/product', product);
// app.use('/api/v2/event', event);
// app.use('/api/v2/coupon', coupon);
// app.use('/api/v2/payment', payment);
// app.use('/api/v2/conversation', conversation);
// app.use('/api/v2/message', message);

// // Error handling
// app.use(ErrorHandler);

// // Export the app
// module.exports = app;
