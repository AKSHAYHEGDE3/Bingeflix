import React from 'react'
import {Link} from 'react-router-dom'

const SearchCard = ({video}) => {
    return (
        <div>
            <div className="m-2 p-1 border border-success">
            <img className="searchImage" src={video.image} alt={video.title} />
                <span style={{color:"white",fontSize:"1.3rem",marginLeft:"4%"}} >{video.title}</span>
            </div>
        </div>
    )
}

export default SearchCard
