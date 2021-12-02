import React from 'react'
import "./Itempg.scss"
import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"



const Itempg = () => {
       
    const params = useParams();
    const [video,setVideo] = useState({})

    useEffect(()=>{
        const fetchVideo = async ()=>{
        try{
            const details = await fetch(`http://localhost:5000/fetchVideo/${params.id}`)
            const data = await details.json()
            setVideo(data) 
        } catch(err){
            console.log(err)
        }
     }
      fetchVideo()
    },([params.id]))

        console.log(video.genre)

    return (
        <div>
            <div>
                <video className="video" progress controls src={video.video }/>
            </div>
            <div className="row infoBox">
                <div className="col-md-4 col-12">
                        <video className="trailerVideo"  progress controls src={video.trailer} />
                    <div className="mx-auto trail" style={{ border: "1px solid white", borderRadius: "10px", width: "100px", textAlign: "center",marginTop:"2%" }}>
                        <i className="fas fa-video"></i>
                        <span style={{ fontFamily: "'Roboto',senserif", marginLeft: "2px" }}>Trailer</span>
                    </div>
                    
                </div>
                <div className="col-md-8 col-12 itemInfo">
                    <h1>{video.title}</h1>
                    <span style={{ fontFamily: "'Roboto',senserif" }}>Ratings : {video.rating?video.rating:"-"}/10 </span>
                    <span style={{ marginLeft: "2%", fontFamily: "'Roboto',senserif" }}>{video.duration} mins</span>
                    <div className="likeBox row">
                        <div className="col-md-3 col-3 like">
                            <i class="far fa-thumbs-up"></i>
                            <p className="vote">10</p>
                        </div>
                        <div className="col-md-3 col-3 dislike">
                            <i class="far fa-thumbs-down"></i>
                            <p className="vote">10</p>
                        </div>
                    </div> 
                    <div className="info">
                        <p>{video.description}</p>
                        <span className="addinfo">Genre: </span> <span className="addinfo" style={{ marginLeft: "2%" }}>
                             {
                                 video.genre ?
                                video.genre.map(gen => `${gen} , `) : ""
                             } 
                            </span><br />
                        <span className="addinfo">Casts: </span> <span className="addinfo" style={{ marginLeft: "2%" }}>Action , Adventure , Comedy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itempg
