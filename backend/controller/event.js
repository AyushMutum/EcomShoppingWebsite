const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncError");
const { upload } = require("../multer");
const Shop = require("../model/shop")
const Event = require("../model/event");
const ErrorHandler = require("../utilis/ErrorHandler");
const { isSeller } = require("../middleware/auth");
const router = express.Router();
const fs = require("fs");

// create event
router.post("/create-event", upload.array("images"), catchAsyncError(async(req,res,next) => {
    try{

        const shopId = req.body.shopId;
        const shop = await Shop.findById(shopId)
        if(!shop){
            return next(new ErrorHandler("Shop Id is invalid",400))
        } else {
            const files = req.files;
            const imageUrl = files.map((file) => `${file.filename}`);

            const eventData = req.body;
            eventData.images = imageUrl;
            eventData.shop = shop;

            const product = await Event.create(eventData);

            res.status(201).json({
                success: true,
                product,
            })
        }

    } catch(error){
        return next(new ErrorHandler(error,400))
    }
}));

// // get all events
// router.get("/get-all-events", async(req,res,next) => {
//     try {
//         const events = await Event.find()
//         res.status(201).json(
//             {
//                 success: true,
//                 events,
//             }
//         )
//     } catch (error) {
//         return next(new ErrorHandler(error,400))
//     }
// })

// get all events
router.get("/get-all-events", async(req, res, next) => {
    try {
      const events = await Event.find();
      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  });


// get all event of the shop
router.get("/get-all-events/:id", catchAsyncError(async(req,res,next) => {
    try{
        const events = await Event.find({shopId: req.params.id});

        res.status(201).json({
            success: true,
            events,
        });
    }
    catch(error){
        return next(new ErrorHandler(error, 400));
    }
}))


// delete event of a shop

router.delete("/delete-shop-event/:id", isSeller, catchAsyncError(async(req,res,next) => {
    try {
        const productId = req.params.id;


        const eventData = await Event.findById(productId);

      
    
        eventData.images.forEach((imageUrl) => {
            const filename = imageUrl;
            const filePath = `uploads/${filename}`

            fs.unlink(filePath, (err) => {
                if(err){
                    console.log(err);
                }
            });

        })
        const event = await Event.findByIdAndDelete(productId);

        if(!event){
            return next (new ErrorHandler('Event not found with this id!', 500))
        }


        res.status(201).json({
            success: true,
            message: "Event Deleted successfully!",
        })

    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}))

module.exports = router;
