const express = require("express");
const router = express.Router();
const Anime = require('../../models/Anime');
const verify = require('../verifyToken');


// ADD ANIME
router.post('/addAnime',verify,async (req,res)=>{
    if(req.user.isAdmin){
        const newAnime = new Anime(req.body);
        try{
            const savedAnime = await newAnime.save()
            res.status(200).send(savedAnime)
        } catch(err){
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you are not authorized");
    }
})

//UPDATE ANIME
router.put('/updateAnime',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedAnime = await Anime.findByIdAndUpdate(
                req.params.id,
                {$set : req.body},
                {new:true}
                );
                res.status(200).send(updatedAnime)
        } catch(err){
            res.status(500).send(err)
        }
    } else {
        res.status(403).send("you are not authorized")
    }
})

// DELETE ANIME
router.delete('/deleteAnime/:id',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const deleteAnime = await Anime.findByIdAndDelete(req.params.id)
            res.status(200).send("Anime deletd successfully")
        }  catch (err){
            res.status(500).json(err)
        }
        
    } else {
        res.status(403).json("You are not authorized");
      }
})

// FETCH ANIME
router.get("/fetchAnime/:id", async (req, res) => {
    try {
      const anime = await Anime.findById(req.params.id);
      res.status(200).json(anime);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   FETCH ALL ANIMES
router.get('/fetchAllAnime',verify, async (req,res)=>{
    if(req.user.isAdmin){
      try{
          const animes = await Anime.find();
          res.status(200).send(animes)
       } catch(err){
          res.status(500).json(err);
    }
  } else {
      res.status(403).json("You are not authorized");
  }
})