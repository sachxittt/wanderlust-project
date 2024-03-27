const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title:{
        type:String,
        reequired:true,

    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
    },
    location:{
        type:String,
        reequired:true,
    },
    country:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model("Listing",listingSchema);
