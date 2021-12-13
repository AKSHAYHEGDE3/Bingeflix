import React from 'react'
import {Link} from 'react-router-dom'
import SingleItem from '../Home/SingleItem'
import './Watch.scss'
import {useParams} from "react-router-dom"
import {useState,useEffect} from 'react'


const Watch = () => {
    const [videos,setVideos]=useState([])
    const params = useParams();

    useEffect(()=>{
        const fetchVideos = async ()=>{
            try{
                const getVideos = await fetch(`http://localhost:5000/fetchAllVideos?type=${params.type}&genre=${params.genre}`)
                const data = await getVideos.json()
                setVideos(data)
            } catch(err){
                console.log(err)
            }
        }
        fetchVideos();
    },[params.type,params.genre])
    
    // console.log(videos)

    return (
        <div>
                <div className="d-flex flex-row">
                    <div className="genre pt-1">Adventure</div>
                    <div className="dropdown">
                        <button className="btn  dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Genre
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/all`}>All</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/action`}>Action</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/adventure`}>Adventure</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/comedy`}>Comedy</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/romance`}>Romance</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/sci-fi`}>Sci-fi</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/horror`}>Horror</Link></li>
                            <li><Link className="dropdown-item" to={`/watch/${params.type}/mystery`}>Mystery</Link></li>
                        </ul>
                    </div>
                </div>
            
            <div className="watchLists ">
                {
                    videos.map(video=>{
                        return <SingleItem data={video}/>
                    })
                }
            </div>
        </div>
    )
}

export default Watch
