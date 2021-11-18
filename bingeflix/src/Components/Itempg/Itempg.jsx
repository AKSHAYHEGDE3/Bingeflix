import React from 'react'
import "./Itempg.scss"
import { useState } from 'react'

const Itempg = () => {
        const [playTrailer,setPlayTrailer] = useState(false)

    return (
        <div>
            <div>
                <video className="video" progress controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" />
            </div>
            <div className="row infoBox">
                <div className="col-md-4 col-12">
                    {
                        !playTrailer ? 
                        <>
                            <img onClick={()=>setPlayTrailer(true)} className="trailerImg" src="https://images5.alphacoders.com/606/thumbbig-606284.webp" alt="..." />
                            <a onClick={()=>setPlayTrailer(true)} className="playTrailer" href="/"><i className="playTrailerIcon fas fa-play-circle"></i> </a>
                        </> 
                    :
                        <video className="trailerVideo" autoplay progress controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" />
                    }
                    <div className="mx-auto trail" style={{ border: "1px solid white", borderRadius: "10px", width: "100px", textAlign: "center",position:"relative",bottom:"10%" }}>
                        <i className="fas fa-video"></i>
                        <span style={{ fontFamily: "'Roboto',senserif", marginLeft: "2px" }}>Trailer</span>
                    </div>
                    
                </div>
                <div className="col-md-8 col-12 itemInfo">
                    <h1>One Piece</h1>
                    <span style={{ fontFamily: "'Roboto',senserif" }}>Ratings : 9/10 </span>
                    <span style={{ marginLeft: "2%", fontFamily: "'Roboto',senserif" }}>20 mins</span>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est corporis odit ipsa numquam et beatae obcaecati, harum, quidem ullam dolor magni pariatur voluptas! Nam labore recusandae assumenda expedita veniam.</p>
                        <span className="addinfo">Genre: </span> <span className="addinfo" style={{ marginLeft: "2%" }}>Action , Adventure , Comedy</span><br />
                        <span className="addinfo">Casts: </span> <span className="addinfo" style={{ marginLeft: "2%" }}>Action , Adventure , Comedy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itempg
