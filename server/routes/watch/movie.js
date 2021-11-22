const express = require("express");
const router = express.Router();
const Movies = require('../../models/Movies');
const verify = require('../verifyToken');


// ADD MOVIE
router.post('/addMovies',verify,async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movies(req.body);
        try{
            const savedMovie = await newMovie.save()
            res.status(200).send(savedMovie)
        } catch(err){
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you are not authorized");
    }
})

//UPDATE MOVIE
router.put('/updateMovie',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedMovie = await Movies.findByIdAndUpdate(
                req.params.id,
                {$set : req.body},
                {new:true}
                );
                res.status(200).send(updatedMovie)
        } catch(err){
            res.status(500).send(err)
        }
    } else {
        res.status(403).send("you are not authorized")
    }
})

// DELETE MOVIE
router.delete('/deleteMovie/:id',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const deleteMovie = await Movies.findByIdAndDelete(req.params.id)
            res.status(200).send("movie deletd successfully")
        }  catch (err){
            res.status(500).json(err)
        }
        
    } else {
        res.status(403).json("You are not authorized");
      }
})

// FETCH MOVIE
router.get("/fetchMovie/:id", async (req, res) => {
    try {
      const movie = await Movies.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   FETCH ALL MOVIES
router.get('/fetchAllMovies',verify, async (req,res)=>{
    if(req.user.isAdmin){
      try{
          const movies = await Movies.find();
          res.status(200).send(movies)
       } catch(err){
          res.status(500).json(err);
    }
  } else {
      res.status(403).json("You are not authorized");
  }
})

module.exports = router