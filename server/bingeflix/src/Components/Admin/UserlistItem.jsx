import React from 'react'

const UserlistItem = ({item}) => {

    const handleDelete = ()=>{
        try{
            // console.log(item._id)
            // console.log("delete")
            const token = localStorage.getItem('token')
            fetch(`/deleteUser/${item._id}`,{
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
                        <span><i className="fas fa-user-circle"></i></span>
                        <span className='name'>{item.username}</span>
                        {/* <span className="edit"><i className="fas fa-edit me-3 me-md-5"></i> */}
                        <span className="delete">  <i onClick={handleDelete} style={{color:"red",cursor:"pointer"}} className="fas fa-trash-alt "></i></span>
            </div>
        </div>
    )
}

export default UserlistItem
