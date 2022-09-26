import React from 'react'
import { useState } from 'react'

const CreateVideos = () => {

    const [video,setVideo] = useState(null);
    const [image,setImage] = useState(null);
    const [title,setTitle] = useState(null);
    const [ratings,setRatings] = useState(null);
    const [duration,setDuration] = useState(null);
    const [releaseDate,setReleaseDate] = useState(null);
    const [genre,setGenre] = useState(null);
    const [type,setType] = useState(null);
    const [casts,setCasts] = useState(null);
    const [description,setDescription] = useState(null);
    const [isTrending,setIsTrending] = useState(null);
    const [onCarousel,setOnCarousel] = useState(null);



    const handleSubmit = async(e) =>{
        e.preventDefault();
       
        try{
            console.log(video)
            if(video === null){
                setVideo("https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4")
            }
            console.log(video)
            const token = localStorage.getItem('token')
            fetch(`/addVideos`,{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json',
                    'token': `bearer ${token}`
                },
                body:JSON.stringify({video,image,title,ratings,duration,releaseDate,genre,type,casts,description,onCarousel,isTrending})
            }).then(res=>res.json()).then(r=>console.log(r))
        } catch(err){
            console.log(err)
        }
    }
    
        

    return (
        <div>
            <div className='container'>
                <form className='form addForm' onSubmit={handleSubmit}>
                    <label className='label'>Title :</label>
                    <input type="text" onChange={e=>setTitle(e.target.value)} className='input'  /> <br />

                    <label className='label'>Video :</label>
                    <input type="text" onChange={e=>setVideo(e.target.value)} className='input'  /> <br />

                    <label className='label'>Image :</label>
                    <input type="text" onChange={e=>setImage(e.target.value)} className='input'  /> <br />

                    <label className='label'>Ratings :</label>
                    <input type="text" onChange={e=>setRatings(e.target.value)} className='input'  /> <br />

                    <label className='label'>Type :</label>
                    <input type="text" onChange={e=>setType(e.target.value)} className='input'  /> <br />

                    <label className='label'>Casts:</label>
                    <input type="text" onChange={e=>setCasts(e.target.value)} className='input'  /> <br />

                    <label className='label'>Duration:</label>
                    <input type="number" onChange={e=>setDuration(e.target.value)} className='input'  /> <br />

                    <label className='label'>Release Date:</label>
                    <input type="date" onChange={e=>setReleaseDate(e.target.value)} className='input'  /> <br />

                    <label className='label'>Is Trending:</label>
                    <input type="text" onChange={e=>setIsTrending(e.target.value)} className='input'  /> <br />

                    <label className='label'>Is Carousel:</label>
                    <input type="text" onChange={e=>setOnCarousel(e.target.value)} className='input'  /> <br />

                    <label className='label'>genre:</label>
                    <input type="text" onChange={e=>
                    {
                        const gen = e.target.value.split(",");
                        setGenre(gen)

                    }}
                    className='input'  /> <br />

                    <label className='label'>description:</label>
                    <input type="text" onChange={e=>setDescription(e.target.value)} className='input'  /> <br />

                    <div>
                    <button type='submit' className='create '>Create</button>  
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateVideos
