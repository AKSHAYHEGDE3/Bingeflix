import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Home.scss'

const SingleItem = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
       
            <div key={data._id} className="box p-2 ">
                                <img className="img" src={data.image} alt={data.title} 
                                   onMouseEnter={()=>{console.log("t")
                                   
                                   setIsHovered(true)
                                 }}
                                 onMouseLeave={()=>{console.log("f")
                                   setIsHovered(false)
                                 }}
                                />
                                <Link 
                                    onMouseEnter={()=>{console.log("t")
                                    setIsHovered(true)
                                     }}
                                    onMouseLeave={()=>{console.log("f")
                                    setIsHovered(false)
                                    }}
                                    style={{
                                        display:!isHovered ? "none" : "inline-block"
                                    }} 
                                    className="playBtn" to={`/itempg/${data._id}`}><i className="playIcon fas fa-play-circle"></i>
                                </Link>
                                <div style={{position:"relative", bottom:!isHovered?"0":"60px"}} className="desc"> 
                                    <p className="title">{data.title.toUpperCase()}</p>
                                    <p className="rating ">Rating : {data.rating ? data.rating : "-"}/10</p>
                                </div>
                  </div> 
       
    )
}

export default SingleItem
