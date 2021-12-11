import React, { useEffect } from 'react'
import { useState } from 'react'

const Comments = ({video,user}) => {

    const [comments,setComments] = useState([])
    const [newComment,setNewComment] = useState('')

    // console.log(comments)
    useEffect(()=>{
        const fetchComments = async ()=>{
            try{
                const fetchComments = await fetch(`http://localhost:5000/getComments/${video?._id}`);
                const data = await fetchComments.json();
                // console.log(data)
                setComments(data)
                
            } catch(err){
                console.log(err)
            }
        }
        fetchComments()
    },[video])

    const handleClick = async ()=>{
        const data = {
            videoId:video._id,
            senderName:user.username,
            text:newComment
        }
        console.log(data)
        try{
            const token = localStorage.getItem('token')
            fetch("http://localhost:5000/addComment", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            'token': `bearer ${token}`
                }
            }).then(response => response.json()).then(json => setComments([...comments,json]))
            // console.log(comments)
            setNewComment('')
        } catch(err){
            console.log(err)
        }
    }

    // console.log(comments)
    return (
        <div>
            <div className="commentBox">
                <div style={{ textAlign: "center", marginBottom: "1.3%", fontSize: "2rem" }}>Comments</div>
                {
                    comments.length > 0 ?
                        comments.map(comment=>{
                            return <>
                            <div style={{ borderTop: "1px solid white" }} className="row">
                                <div className="col-2"><i style={{ fontSize: "3rem" }} className="fas fa-user-circle mt-4 ms-sm-4"></i></div>
                                <div className="col-10 mt-2">
                                    <p>{comment.senderName}</p>
                                    <p>{comment.text} </p>
                                </div>
                            </div>
                        </>
                    }) : ""
                
                }
                

                 <div style={{ borderTop: "1px solid white" }} className="row">
                    <div className="col-9 mt-5">
                        <input className="w-100" type="text" 
                        onChange={e=>setNewComment(e.target.value)} 
                        value={newComment}  
                        />
                    </div>
                    <div className="col-3 mt-5">
                        <button onClick={handleClick} className="btb btn-dark">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
