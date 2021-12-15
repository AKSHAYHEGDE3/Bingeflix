import React from 'react'
import "./Itempg.scss"
import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { UserContext } from "../../UserContext";
import Comments from './Comments';
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';



const Itempg = () => {

    const params = useParams();
    const { user, setUser } = useContext(UserContext);
    const [video, setVideo] = useState({})
    const [trailerId,setTrailerId] = useState("")
    const opts={
        height:"300px",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const details = await fetch(`/fetchVideo/${params.id}`)
                const data = await details.json()
                setVideo(data)
                console.log(data.title)
                const m =  await movieTrailer( data.title )
                console.log(m)
                const urlParams = new URLSearchParams(new URL(m).search)
                console.log(urlParams.get('v'))
                setTrailerId(urlParams.get('v'))
            } catch (err) {
                console.log(err)
            }
        }
        fetchVideo()
    }, ([params.id]))

    const handleLike = async () => {
        // console.log(video.likedPeople)
        // console.log(user._id)
        if (video.likedPeople.includes(user._id)) {
            video.likedPeople = video.likedPeople.filter(id => user._id !== id);
            //    console.log(video.likedPeople)
        } else {
            video.likedPeople.push(user._id)
        }
        try {
            const token = localStorage.getItem('token')
            const data = await fetch("/likeVideo", {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `bearer ${token}` ,
                },
                body: JSON.stringify({ liked: video.likedPeople, videoId: video._id })
            })
            const newVideo = await data.json();
            //   console.log(newVideo)
            setVideo(newVideo)
        } catch (err) {
            console.log(err)
        }

    }

    const handleDislike = async () => {
        if (video.dislikedPeople.includes(user._id)) {
            video.dislikedPeople = video.dislikedPeople.filter(id => user._id !== id);
            //    console.log(video.dislikedPeople)
        } else {
            video.dislikedPeople.push(user._id)
        }
        try {
            const token = localStorage.getItem('token')
            const data = await fetch("/dislikeVideo", {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `bearer ${token}` 
                },
                body: JSON.stringify({ disliked: video.dislikedPeople, videoId: video._id })
            })
            const newVideo = await data.json();
            //   console.log(newVideo)
            setVideo(newVideo)
        } catch (err) {
            console.log(err)
        }

    }
    // console.log(video)
    return (
        <div>
            <div>
                <video className="video" progress controls src={video.video} />
            </div>
            <div className="row infoBox">
                <div className="col-md-4 col-12">
                    {/* <video className="trailerVideo" progress controls src={video.trailer} /> */}
                    <YouTube videoId={trailerId} opts={opts}/>
                    <div className="mx-auto trail" style={{ border: "1px solid white", borderRadius: "10px", width: "100px", textAlign: "center", marginTop: "2%" }}>
                        <i className="fas fa-video"></i>
                        <span style={{ fontFamily: "'Roboto',senserif", marginLeft: "2px" }}>Trailer</span>
                    </div>

                </div>
                <div className="col-md-8 col-12 itemInfo">
                    <h1>{video.title}</h1>
                    <span style={{ fontFamily: "'Roboto',senserif" }}>Ratings : {video.rating ? video.rating : "-"}/10 </span>
                    <span style={{ marginLeft: "2%", fontFamily: "'Roboto',senserif" }}>{video.duration} mins</span>
                    <div className="likeBox row">
                        <div className="col-md-3 col-3 like">
                            {!video.likedPeople?.includes(user?._id) ?
                                <i onClick={handleLike} class="far fa-thumbs-up"></i> :
                                <i onClick={handleLike} class="fas fa-thumbs-up"></i>
                            }
                            <p className="vote">{video.likedPeople?.length}</p>
                        </div>
                        <div className="col-md-3 col-3 dislike">
                            {!video.dislikedPeople?.includes(user?._id) ?
                                <i onClick={handleDislike} class="far fa-thumbs-down"></i> :
                                <i onClick={handleDislike} class="fas fa-thumbs-down"></i>
                            }
                            <p className="vote">{video.dislikedPeople?.length}</p>
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
                        <span className="addinfo">Casts: </span> <span className="addinfo" style={{ marginLeft: "2%" }}>{video?.casts}</span>
                    </div>
                </div>
            </div>
            
            <Comments video={video} user={user} />

        </div>
    )
}

export default Itempg