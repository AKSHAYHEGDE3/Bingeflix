import React from 'react'
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"

const EditVideos = () => {
    const params = useParams();
    const [change,setChange]= useState(null)
   
    // console.log(params.id)
    useEffect(() => {
       const fetchVideo = async ()=>{
        try{
          const data = await  fetch(`/fetchVideo/${params.id}`)
          const res = await data.json();
          setChange(res)
        //   console.log(change)
        } catch(err){
            console.log(err)
        }
       }
       fetchVideo();
    }, [params.id])


    const handleChange = (e) => {
        const value = e.target.value;
        setChange({ ...change, [e.target.name]: value });
      };

      const handleGenChange = (e) => {
        const value = e.target.value.split(",");
        setChange({ ...change, [e.target.name]: value });
      };

    console.log(change)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            console.log(change)
            const token = localStorage.getItem('token')
            fetch(`/updateVideo/${params.id}`,{
                method:'PUT',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json',
                    'token': `bearer ${token}`
                },
                body:JSON.stringify({
                   title: change.title,
                   video: change.video,
                   image: change.image,
                   rating: change.rating,
                   type: change.type,
                   casts: change.casts,
                   duration: change.duration,
                   released_date: change.released_date,
                   genre: change.genre,
                   isTrending: change.isTrending,
                })
            }).then(res=>res.json()).then(r=>console.log(r))
        } catch(err){
            console.log(err)
        }
    }
    
        

    return (
        <div>
            <div className='container'>
                <form className='form addForm' onSubmit={handleSubmit} >
                    <label className='label'>Title :</label>
                    <input type="text" name="title" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Video :</label>
                    <input type="text" name="video" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Image :</label>
                    <input type="text" name="image" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Ratings :</label>
                    <input type="text" name="rating" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Type :</label>
                    <input type="text" name="type" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Casts:</label>
                    <input type="text" name="casts" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Duration:</label>
                    <input type="number" name="duration" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Release Date:</label>
                    <input type="date" name="released_date" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>Is Trending:</label>
                    <input type="text" name="isTrending" onChange={handleChange} className='input'  /> <br />

                    <label className='label'>genre:</label>
                    <input type="text" name="genre" onChange={handleGenChange}
                    className='input'  /> <br />

                    <label className='label'>description:</label>
                    <input type="text" name="description" onChange={handleChange} className='input'  /> <br />

                    <div>
                    <button type='submit' className='create '>Create</button>  
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EditVideos
