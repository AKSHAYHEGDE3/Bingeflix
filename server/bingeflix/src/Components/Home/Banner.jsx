import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Banner = () => {

    const [video,setVideo] = useState({});

    useEffect(()=>{
        const fetchVideo = async ()=>{
        try{
            const getVideos = await fetch(`/fetchall`)
            const data = await getVideos.json()
            setVideo(data[Math.floor(Math.random()*data.length)])
        } catch(err){
            console.log(err)
        }
    }
    fetchVideo();
    },[])

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "100% 100%",
                backgroundImage: `linear-gradient(
          to bottom,
          transparent,
          rgba(31, 31, 31, 0.5),
          #111
        ),url(${video.image})`, backgroundPosition: "center center"
            }}
        >
      
            <div className="banner_contents">
                <h1 className='banner_title'>{video.title}</h1>
                <div className="banner_buttons">
                  <Link to ={`/itempg/${video._id}`}> <button style={{color:"blue"}} className="banner_button"><span>Watch</span><i class="ms-2 fas fa-play"></i></button></Link>
                    <button className="banner_button">{video.duration} mins</button>
                </div>
                <p className='banner_desc'>{truncate(video.description,500)}</p>

            </div>
            
        </header>


    )
}

export default Banner
