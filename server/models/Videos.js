const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        title : {type:String},
        video: {type:String},
        trailer : {type:String},
        image : {type:String},
        description : {type:String},
        duration : {type:Number},
        rating : {type:String},
        released_date : {type:Date},
        genre : {type:Array},
        isTrending : {type:Boolean,default:false},
        onCarousel : {type:Boolean,default:false},
        type:{type:String},
        casts:{type:String},
        likedPeople:{type:Array},
        dislikedPeople:{type:Array}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Movie",MovieSchema);