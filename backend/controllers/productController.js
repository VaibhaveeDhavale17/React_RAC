const Product = require("../modals/productModal");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const { json } = require("express");
const ApiFeatures = require("../utils/apiFeatures");


/*************
CREATE PRODUCT
**************/
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product,
    })
});

/*************
GET ALL PRODUCTS
**************/
exports.getAllProducts = catchAsyncErrors(async (req,res)=>{

    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
    const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products
    })
});


/*************
GET PRODUCT DETAILS
**************/
exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success:true,
        product,
    })
});

/*************
UPDATE PRODUCT
**************/

exports.updateProduct = catchAsyncErrors(async(req,res, next)=>{
    let product =await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    product = await Product.findOneAndUpdate({refNumber:req.params.refNumber}, req.body,{
        new:true,
        runValidators:true, 
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product,
    })
});

/*************
DELETE PRODUCT
**************/

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    
    const product = await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully",
    })
});

//get expiring products

exports.scheduleExpiryDate = catchAsyncErrors(async (req,res,next) =>{
   const today = new Date();
   const fifteenDaysFromNow = new Date(today);
   fifteenDaysFromNow.setDate(today.getDate()+15);

   const expiringProducts =await Product.find({
    productExpiryDate:{
        $gte:today,
        $lte:fifteenDaysFromNow
    }
   });

   res.status(200).json({
    success:true,
    expiringProducts,
   });
});


exports.expiredProducts = catchAsyncErrors(async(req,res,next)=>{
    const today = new Date();
    const expiredProducts = await Product.find({
        productExpiryDate:{
            $lt: today
        }
    });
    
    if(!expiredProducts){
        return next(new ErrorHandler(`No Expired Products`, 404));
    }

    res.status(201).json({
        sucess:true,
        expiredProducts
    })
})