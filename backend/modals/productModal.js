const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Please enter product name"]
    },

    productDescription:{
        type:String,
        required:[true, "Please enter product description"]
    },

    productPrice:{
        type:Number,
        required:[true,"Please enter the price of the product"],
        maxLength:[8, "Price cannot exceed 8 figures"]
    },

    monthColor:{
        type:Number,
        required:true,
        default:getCurrentMonthColor(),
    },

    productEntryDate:{
        type:Date,
        default:Date.now,
    },

    productExitDate:{
        type:Date,
    },

    productExpiryDate:{
        type:Date,
    },

    numOfProducts:{
        type:Number,
        default:0,
    },

    tax:{
        type:Number,
        default:0,
    },
    cgst:{
        type:Number,
        default:0,
    },


    sgst:{
        type:Number,
        default:0,
    },

    totalPrice:{
      type:Number,
      default:0,  
    }
    
});

//FUNCTION TO GET THE CURRENT MONTH'S COLOR
function getCurrentMonthColor(){
    const monthColors={
        '01':'Blue',
        '02':'Green',
        '03':'Yellow',
        '04':'Sea Green',
        '05':"Pink",
        '06':'Magenta',
        '07':'Orange',
        '08':'Peach',
        '09':'Brown',
        '10':'Cyan',
        '11':'Purple',
        '12':'Dark Blue'
    };

    const currentMonth = new Date().toLocaleString('en-US',{month:'2-digit'});

    return monthColors[currentMonth];
}

module.exports=mongoose.model('Product', productSchema);