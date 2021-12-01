import React from 'react'
import {useState,useEffect} from 'react'

const Trending = () => {

    const [movieLists,setMovieLists]= useState([])
    const [seriesLists,setSeriesLists]= useState([])
    const [animeLists,setAnimeLists]= useState([])

    // useEffect(()=>{
    //     const trendingMovies = async ()=>{
    //         await fetch('http://localhost:5000/fetchTrendingVideos?type=movies').
    //         then(res=>res.json()).
    //         then(r=>console.log(r)).
    //         catch(err=>console.log(err))
    //     }
    // },[])


    return (
        <div>
            
        </div>
    )
}

export default Trending
