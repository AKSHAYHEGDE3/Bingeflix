import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import spinner from './Spinner.gif'
import UserlistItem from './UserlistItem'
import VideolistItem from './VideolistItem'

const AdminSection = () => {
    const params = useParams();
    const [lists,setLists] = useState([])
    const [loading,setLoading] = useState(true)
    const type = params.lists;

    useEffect( () => {
        console.log("users")
        const fetchLists = async () =>{
        const token = localStorage.getItem('token')
       try{
            if(type === "users"){
             const data = await fetch("http://localhost:5000/fetchUsers",{
                headers: { 'token': `bearer ${token}` },
              }).then(res=>res.json()).then(r=>{setLoading(false); setLists(r)});
            } else if(type === "series" || type === "movies" || type === "animes"){
             await  fetch(`http://localhost:5000/fetchAllVideos?type=${type}&genre=all`).then(res=>res.json()).then(r=>{setLoading(false); setLists(r)});
            }
       } catch(err){
           console.log(err)
       }
     } 
     fetchLists();
 },[])


    return (
        <div className="container">
             <div style={{marginTop:"8%"}} className="text-end">
          {  type !== "users" ? <Link to="/addVideos"><button style={{backgroundColor:"blue"}} type="button" class="btn btn-primary" >ADD +</button></Link> :"" }
            </div>
            <div className="showItems">
                <h3 style={{width:"65px"}} className="mx-auto">{type}</h3>
                <hr />
                {
                    loading ? 
                    <img src={spinner} alt="loading..." /> : ""
                }
                
                { (type === "users") ? 
                    lists.map(item=>{
                    return <UserlistItem item={item} />}) : 
                    lists.map(item=>{
                    return <VideolistItem item={item}/>
                })
                }
            </div>
        </div>
    )
}

export default AdminSection
