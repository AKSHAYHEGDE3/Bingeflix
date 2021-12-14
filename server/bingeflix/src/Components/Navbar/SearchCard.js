import React from 'react'
import {Link} from 'react-router-dom'

const SearchCard = ({video}) => {
    return (
        <div>
            <div className="m-2 p-1 border border-success">
                <span style={{color:"white",fontSize:"1.3rem",marginLeft:"1%"}} >{video.title}</span>
               <img className="searchImage" src={video.image} alt={video.title} />
                
            </div>
        </div>
    )
}

export default SearchCard
