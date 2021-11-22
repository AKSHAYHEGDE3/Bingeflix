const express = require("express");
const router = express.Router();
const Series = require('../../models/Series');
const verify = require('../verifyToken');


// ADD SERIES
router.post('/addSeries',verify,async (req,res)=>{
    if(req.user.isAdmin){
        const newSeries = new Series(req.body);
        try{
            const savedSeries = await newSeries.save()
            res.status(200).send(savedSeries)
        } catch(err){
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you are not authorized");
    }
})

//UPDATE SERIES
router.put('/updateSeries',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedSeries = await Series.findByIdAndUpdate(
                req.params.id,
                {$set : req.body},
                {new:true}
                );
                res.status(200).send(updatedSeries)
        } catch(err){
            res.status(500).send(err)
        }
    } else {
        res.status(403).send("you are not authorized")
    }
})

// DELETE SERIES
router.delete('/deleteSeries/:id',verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const deleteSeries = await Series.findByIdAndDelete(req.params.id)
            res.status(200).send("Series deletd successfully")
        }  catch (err){
            res.status(500).json(err)
        }
        
    } else {
        res.status(403).json("You are not authorized");
      }
})

// FETCH SERIES
router.get("/fetchSeries/:id", async (req, res) => {
    try {
      const series = await Series.findById(req.params.id);
      res.status(200).json(series);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   FETCH ALL SERIES
router.get('/fetchAllSeries',verify, async (req,res)=>{
    if(req.user.isAdmin){
      try{
          const series = await Series.find();
          res.status(200).send(series)
       } catch(err){
          res.status(500).json(err);
    }
  } else {
      res.status(403).json("You are not authorized");
  }
})