import React from 'react'
import { Link } from 'react-router-dom'

const VideolistItem = ({item}) => {

    const handleDelete = ()=>{
        try{
            // console.log("delete")
            const token = localStorage.getItem('token')
            fetch(`/deleteVideo/${item._id}`,{
                method:'DELETE',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json',
                    'token': `bearer ${token}`
                },
                
            })
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="singleItem mt-4">
                        <span><img className="listImage" src={item.image} alt={item.title} /></span>
                        <span className='name'>{item.title}</span>
                        <span className="edit">  <Link to={`/editVideos/${item._id}`} > <i style={{color:"green"}} className="fas fa-edit me-3 me-md-5"></i> </Link>
                          <i onClick={handleDelete} style={{color:"red",cursor:"pointer"}} className="fas fa-trash-alt "></i></span>
            </div>
        </div>
    )
}

export default VideolistItem
