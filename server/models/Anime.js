const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema(
    {
        title : {type:String},
        video: {type:String},
        trailer : {type:String},
        image : {type:String},
        description : {type:String},
        duration : {type:Number},
        Rating : {type:String},
        released_date : {type:Date},
        genre : {type:String}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Anime",AnimeSchema);