import React from 'react'
import { useState } from 'react';
import './Home.scss'

const SingleItem = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
       
            <div key={data.id} className="box p-2 ">
                                <img className="img" src={data.url} alt={data.name} 
                                   onMouseEnter={()=>{console.log("t")
                                   
                                   setIsHovered(true)
                                 }}
                                 onMouseLeave={()=>{console.log("f")
                                   setIsHovered(false)
                                 }}
                                />
                                <a 
                                    onMouseEnter={()=>{console.log("t")
                                    setIsHovered(true)
                                     }}
                                    onMouseLeave={()=>{console.log("f")
                                    setIsHovered(false)
                                    }}
                                    style={{
                                        display:!isHovered ? "none" : "inline-block"
                                    }} 
                                    className="playBtn" href="/"><i className="playIcon fas fa-play-circle"></i>
                                </a>
                                <div style={{position:"relative", bottom:!isHovered?"0":"60px"}} className="desc"> 
                                    <p className="title">{data.name.toUpperCase()}</p>
                                    <p className="rating ">Rating : {data.rating}/10</p>
                                </div>
                  </div> 
       
    )
}

export default SingleItem
