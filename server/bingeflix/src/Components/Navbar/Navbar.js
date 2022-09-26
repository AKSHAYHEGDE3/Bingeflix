import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import SearchCard from './SearchCard';


const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const handleLogout = () => {
        setUser(null)
        localStorage.setItem('token', '')
    }

    useEffect(() => {
        const searchVideo = async () => {
            try {
                const result = await fetch('/search', {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ search })
                })
                const data = await result.json()
                if (search !== "") {
                    setIsSearch(true)
                    setSearchResult(data)
                } else {
                    setIsSearch(false)
                    setSearchResult([])
                }

            } catch (err) {
                console.log(err)
            }
        }

        searchVideo();

    }, [search])





    return (
        <div >
            <nav className={isScrolled ? "navbar scrolled navbar-expand-lg navbar-dark " : "navbar navbar-expand-lg navbar-dark "}>
                <div className="container-fluid">
                    <Link className="navbar-brand p-2" to="/">BINGEFLIX</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-4">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/watch/movies/all">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watch/series/all">Shows</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/watch/animes/all">Animes</Link>
                            </li>

                        </ul>

                        <div className="dropdown profile ">
                            <button style={{ backgroundColor: "transparent", border: "0.2px solid transparent" }} className="btn btn-success dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i style={{ fontSize: "1.8rem", padding: "2%" }} className="fas fa-user-circle"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/">{user.username}</Link></li>
                                <li style={{ cursor: "pointer" }} onClick={handleLogout}><p className="dropdown-item">Logout</p></li>
                                {user.isAdmin ? <li><Link className="dropdown-item" to="/admin">Admin</Link></li> : ""}
                            </ul>
                        </div>

                        <form className="me-md-4 mt-md-0 mt-3">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search"
                                value={search} onChange={e => setSearch(e.target.value)}
                            />
                            {
                                (isSearch) ?
                                    <div className="bg-dark p-1 searchBar1">
                                        {

                                            searchResult.map(video => <SearchCard video={video} />)
                                        }
                                    </div> : ""
                            }

                        </form>
                    </div>
                </div>
            </nav>
            {
                (isSearch) ?
                    <div className="bg-dark p-1 searchBar">
                        {

                            searchResult.map(video => <SearchCard video={video} />)
                        }
                    </div> : ""
            }

        </div>
    )
}

export default Navbar
