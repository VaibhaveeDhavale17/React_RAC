const Product = require("../modals/productModal");

/*************
CREATE PRODUCT
**************/
exports.createProduct = async(req,res,next)=>{

    try{
        const product = await Product.create(req.body);

        const present = await Product.findOne({refNumber: req.params.refNumber});

    if(present){

        res.status(500).json({
            status:false,
            message:"Product already created"
        });
        
    }

    res.status(201).json({
        success:true,
        product,
    })

    
    }catch(err){
        res.status(500).json({
            status:false,
            message:"Internal server error",
        });
    }
}


/*************
GET ALL PRODUCTS
**************/
exports.getAllProducts = async (req,res)=>{

    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
}


/*************
GET PRODUCT DETAILS
**************/
exports.getProductDetails = async(req,res,next)=>{

    const product = await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product id not found",
        })
    }

    res.status(200).json({
        success:true,
        product,
    })
}

/*************
UPDATE PRODUCT
**************/

exports.updateProduct = async(req,res, next)=>{
    let product =await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
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

};

/*************
DELETE PRODUCT
**************/

exports.deleteProduct = async(req,res,next)=>{
    
    const product = await Product.findOne({refNumber:req.params.refNumber});

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully",
    })
}