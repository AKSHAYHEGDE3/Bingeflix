import React from 'react'
import "./Admin.css"
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"

const AdminHome = () => {
    const [users,setUsers] = useState([]);
    const [movies,setMovies] = useState([]);
    const [series,setSeries] = useState([]);
    const [animes,setAnimes] = useState([]);

    useEffect(() => {
       const fetchResources = async () =>{
        const token = localStorage.getItem('token')
       try{
            fetch("http://localhost:5000/fetchUsers",{
                headers: { 'token': `bearer ${token}` },
              }).then(res=>res.json()).then(r=>setUsers(r));
            
            fetch("http://localhost:5000/fetchAllVideos?type=movies&genre=all").then(res=>res.json()).then(r=>setMovies(r));

            fetch("http://localhost:5000/fetchAllVideos?type=series&genre=all").then(res=>res.json()).then(r=>setSeries(r));

            fetch("http://localhost:5000/fetchAllVideos?type=animes&genre=all").then(res=>res.json()).then(r=>setAnimes(r));
       } catch(err){
           console.log(err)
       }
    }
    fetchResources();
}, [])

    

    return (
        <div className="container">
            <div className="row text-center">
                <Link to="/adminSection/users" className="col-md-6 col-12" >
                    <div className="boxes">
                        <p>Users</p>
                        <p>{users.length}</p>
                    </div>
                </Link>
                <Link to="/adminSection/movies" className="link col-md-6 col-12">
                    <div className="boxes">
                        <p>Movies</p>
                        <p>{movies.length}</p>
                    </div>
                </Link>
                <Link to="/adminSection/series" className="link col-md-6 col-12">
                    <div className="boxes">
                        <p>Series</p>
                        <p>{series.length}</p>
                    </div>
                </Link>
                <Link to="/adminSection/animes" className="col-md-6 col-12">
                    <div className="boxes">
                        <p>Animes</p>
                        <p>{animes.length}</p>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default AdminHome
