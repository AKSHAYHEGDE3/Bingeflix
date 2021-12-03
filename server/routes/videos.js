const express = require("express");
const router = express.Router();
const Videos = require('../models/Videos');
const verify = require('../verifyToken');


// ADD MOVIE
router.post('/addVideos', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newVideo = new Videos(req.body);
        try {
            const savedVideo = await newVideo.save()
            res.status(200).send(savedVideo)
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you are not authorized");
    }
})

//UPDATE MOVIE
router.put('/updateVideo', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedVideo = await Videos.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).send(updatedVideo)
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.status(403).send("you are not authorized")
    }
})

// DELETE MOVIE
router.delete('/deleteVideo/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const deleteVideo = await Videos.findByIdAndDelete(req.params.id)
            res.status(200).send("movie deletd successfully")
        } catch (err) {
            res.status(500).json(err)
        }

    } else {
        res.status(403).json("You are not authorized");
    }
})

// FETCH MOVIE
router.get("/fetchVideo/:id", async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id);
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json(err);
    }
});

//   FETCH ALL MOVIES
router.get('/fetchAllVideos', async (req, res) => {
    const type = req.query.type;
    const genre = req.query.genre;
    try {
        if (type === "movies") {
            if(genre==="all"){
                const videos = await Videos.find({ type: "movie"});
                res.status(200).send(videos)
            } else{
                const videos = await Videos.find({ type: "movie", genre:{$in:[genre]} });
                res.status(200).send(videos)
            }
        } else if (type === "series") {
            if(genre==="all"){
                const videos = await Videos.find({ type: "series"});
                res.status(200).send(videos)
            } else{
                const videos = await Videos.find({ type: "series", genre:{$in:[genre]} });
                res.status(200).send(videos)
            }
        } else if (type === "animes") {
            if(genre==="all"){
                const videos = await Videos.find({ type: "anime"});
                res.status(200).send(videos)
            } else{
                const videos = await Videos.find({ type: "anime", genre:{$in:[genre]} });
                res.status(200).send(videos)
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }



})

//GET TRENDING MOVIES

router.get('/fetchTrendingVideos', async (req, res) => {
    // console.log(req.user)
    const type = req.query.type;
    try {
        if (type === "movies") {
            const videos = await Videos.find({ type: "movie", isTrending: true });
            res.status(200).send(videos)
        } else if (type === "series") {
            const videos = await Videos.find({ type: "series", isTrending: true });
            res.status(200).send(videos)
        } else if (type === "animes") {
            const videos = await Videos.find({ type: "anime", isTrending: true });
            res.status(200).send(videos)
        }
    } catch (err) {
        res.status(500).send(err)
    }



})

// CAROUSEL IMGS

router.get('/getCarousel',  async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const carousel = await Videos.find({ onCarousel: true });
            res.status(200).send(carousel)
        } catch (err) {
            res.status(500), send(err)
        }
    } else {
        res.status(403).json("You are not authorized");
    }

})

    // LIKES 

    router.put('/likeVideo',async(req,res)=>{
        // console.log(req.body)
        try{
            const video = await Videos.findByIdAndUpdate(req.body.videoId,{likedPeople:req.body.liked},{new:true})
            res.status(200).send(video)
        } catch(err){
            res.status(500).send(err)
        }
       
    })

    //  dislikes

    router.put('/dislikeVideo',async(req,res)=>{
        // console.log(req.body)
        try{
            const video = await Videos.findByIdAndUpdate(req.body.videoId,{dislikedPeople:req.body.disliked},{new:true})
            res.status(200).send(video)
        } catch(err){
            res.status(500).send(err)
        }
       
    })

module.exports = router