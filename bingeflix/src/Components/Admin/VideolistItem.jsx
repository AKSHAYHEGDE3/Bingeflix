import React from 'react'

const VideolistItem = ({item}) => {

    const handleDelete = ()=>{
        try{
            // console.log("delete")
            const token = localStorage.getItem('token')
            fetch(`http://localhost:5000/deleteVideo/${item._id}`,{
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
                        <span className="edit"><i className="fas fa-edit me-3 me-md-5"></i>
                        <i onClick={handleDelete} style={{color:"red",cursor:"pointer"}} className="fas fa-trash-alt"></i></span>
            </div>
        </div>
    )
}

export default VideolistItem
