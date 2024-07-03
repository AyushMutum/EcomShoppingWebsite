// const express = require("express");
// const path = require("path");
// const router = express.Router();
// const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const sendMail = require("../utilis/sendMail");
// // const sendShopToken = require("../utilis/shopToken");
// const sendToken = require("../utilis/jwtToken");
// const Shop = require("../model/shop");
// // const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
// const ErrorHandler = require("../utilis/ErrorHandler");
// // const { required } = require("nodemon/lib/config");
// const {upload} = require('../multer')
// // const cloudinary = require("cloudinary");
// // const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const catchAsyncError = require("../middleware/catchAsyncError");
// // const ErrorHandler = require("../utils/ErrorHandler");


// router.post("/create-shop", upload.single("file"), async(req,res,next) => {
//     try {
//         const {email} = req.body;
//         const sellerEmail = await Shop.findOne({email})

//         if (sellerEmail) {
//             // If seller already exists, delete the uploaded file and return an error
//             const filename = req.file.filename;
//             const filePath = `uploads/${filename}`;
      
//             fs.unlink(filePath, (err) => {
//               if (err) {
//                 console.log(err);
//                 res.status(500).json({ message: "Error deleting file" });
//               }
//               return next(new ErrorHandler("User already exists", 400));
//             });
//           }

//     //       let fileUrl = "";
//     // if (req.file) {
//     //   // If a file is uploaded, set the fileUrl
//     //   const filename = req.file.filename;
//     //   fileUrl = path.join("uploads", filename);
//     // }

//     // const seller = {
//     //   name,
//     //   email,
//     //   password,
//     //   avatar: fileUrl,
//     //   address,
//     //   phoneNumber,
//     //   zipCode,
//     // };

    
//       const filename = req.file.filename;
//       const fileUrl = path.join(filename);

//     const seller = {
//       name: req.body.name,
//       email: email,
//       password: req.body.password,
//       avatar: fileUrl,
//       address: req.body.address,
//       phoneNumber: req.body.phoneNumber,
//       zipCode: req.body.zipCode,
//     };

//     const activationToken = createActivationToken(seller);
//     const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;


//     await sendMail({
//         email: seller.email,
//         subject: "Activate your shop",
//         message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
//       });
  
//       // Respond with success message
//       res.status(201).json({
//         success: true,
//         message: `Please check your email (${seller.email}) to activate your shop!`,
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 500));
//     }

// })

// // create activation token
// const createActivationToken = (seller) => {
//     return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
//       expiresIn: "5m",
//     });
//   };
  
//   // activate user
// router.post(
//     "/shop/activation",
//     catchAsyncError(async (req, res, next) => {
//       try {
//         const { activation_token } = req.body;
  
//         const newSeller = jwt.verify(
//           activation_token,
//           process.env.ACTIVATION_SECRET
//         );
  
//         if (!newSeller) {
//           return next(new ErrorHandler("Invalid token", 400));
//         }
  
//         const { name, email, password, avatar, zipCode, address, phoneNumber } = newSeller;
  
//         // Check if user already exists
//         let seller = await Shop.findOne({ email });
  
//         if (seller) {
//           return next(new ErrorHandler("User already exists", 400));
//         }
  
//         // Create a new user
//         seller = await Shop.create({
//           name,
//           email,
//           avatar,
//           password,
//           address,
//           zipCode,
//           phoneNumber,
//         });
  
//         // Respond with success and token
//         sendToken(seller, 201, res);
//       } catch (error) {
//         console.log(error);
//         return next(new ErrorHandler(error.message, 500));
//       }
//     })
//   );

// module.exports = router;

const path = require("path");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utilis/sendMail");
const sendShopToken = require("../utilis/shopToken");
const Shop = require("../model/shop");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utilis/ErrorHandler");
const { upload } = require('../multer');
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
//  const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
// create shop

router.post("/create-shop", upload.single("file"), async (req, res, next) => {
    try {
        const { email } = req.body;
        const sellerEmail = await Shop.findOne({ email });

        if (sellerEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error deleting file" });
                }
                return next(new ErrorHandler("User already exists", 400));
            });
        }

        const filename = req.file.filename;
        // const fileUrl = `uploads/${filename}`;
        const fileUrl = path.join(filename);

        const seller = {
            name: req.body.name,
            email: email,
            password: req.body.password,
            avatar: fileUrl,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            zipCode: req.body.zipCode,
        };

        const activationToken = createActivationToken(seller);
        const activationUrl = `https://ecom-shopping-website-uwx1.vercel.app/seller/activation/${activationToken}`;

        await sendMail({
            email: seller.email,
            subject: "Activate your shop",
            message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
        });

        res.status(201).json({
            success: true,
            message: `Please check your email (${seller.email}) to activate your shop!`,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});

// create activation token
const createActivationToken = (seller) => {
    return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
};

router.post("/activation", catchAsyncError(async (req, res, next) => {
    try {
        const { activation_token } = req.body;

        const newSeller = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

        if (!newSeller) {
            return next(new ErrorHandler("Invalid token", 400));
        }

        const { name, email, password, avatar, zipCode, address, phoneNumber } = newSeller;

        let seller = await Shop.findOne({ email });

        if (seller) {
            return next(new ErrorHandler("User already exists", 400));
        }


        
        seller = await Shop.create({
            name,
            email,
            avatar,
            password,
            address,
            zipCode,
            phoneNumber,
        });

        sendShopToken(seller, 201, res);
    } catch (error) {
        console.log(error);
        return next(new ErrorHandler(error.message, 500));
    }
}));


// login shop
router.post(
    "/login-shop",
    catchAsyncError(async (req, res, next) => {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return next(new ErrorHandler("Please provide all fields!", 400));
        }
  
        const user = await Shop.findOne({ email }).select("+password");
  
        if (!user) {
          return next(new ErrorHandler("User doesn't exist", 400));
        }
  
        const isPasswordValid = await user.comparePassword(password);
  
        if (!isPasswordValid) {
          return next(
            new ErrorHandler("Please provide correct information", 400)
          );
        }
  
        // Respond with success and token
        sendShopToken(user, 201, res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


  // load shop
router.get(
    "/getSeller",
    isSeller,
    catchAsyncError(async (req, res, next) => {
      try {
        const seller = await Shop.findById(req.seller._id);
  
        if (!seller) {
          return next(new ErrorHandler("User doesn't exist", 400));
        }
  
        // Respond with success and user data
        res.status(200).json({
          success: true,
          seller,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


  // logout from shop 

  router.get("/logout",catchAsyncError(async(req,res,next) => {
    try{
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
  
      res.status(201).json({
        success: true,
        message: "Log out successful!"
      })
    
    }catch(error){
      return next(new ErrorHandler(error.message, 500));
    }
  }))
  

  // /get shop info 

  router.get("/get-shop-info/:id", catchAsyncError(async(req,res,next) => {
    try {

      const shop = await Shop.findById(req.params.id)
      res.status(201).json({
        success: true,
        shop,
      })
      
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }))


  // update shop profile picture
  router.put(
    "/update-shop-avatar",
    isSeller,
    upload.single("image"),
    catchAsyncError(async (req, res, next) => {
      try {
        let existsSeller = await Shop.findById(req.seller._id);
  
        const existAvatarPath = `uploads/${existsSeller.avatar}`;

        fs.unlinkSync(existAvatarPath);

        const fileUrl = path.join(req.file.filename);

        const seller = await Shop.findByIdAndUpdate(req.seller._id, {
          avatar: fileUrl,
        })
    
        await existsSeller.save();
  
        res.status(200).json({
          success: true,
          seller : existsSeller,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


  // update seller info
router.put(
  "/update-seller-info",
  isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const { name, description, address, phoneNumber, zipCode } = req.body;

      const shop = await Shop.findOne(req.seller._id);

      if (!shop) {
        return next(new ErrorHandler("User not found", 400));
      }

      shop.name = name;
      shop.description = description;
      shop.address = address;
      shop.phoneNumber = phoneNumber;
      shop.zipCode = zipCode;

      await shop.save();

      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
