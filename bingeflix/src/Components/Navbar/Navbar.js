import React from 'react'
import './Navbar.scss'
import { useState } from "react";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };

    return (
        <div >
            <nav class={isScrolled ? "navbar scrolled navbar-expand-lg navbar-dark " :"navbar navbar-expand-lg navbar-dark "}>
                <div class="container-fluid">
                    <a class="navbar-brand p-2" href="/">BINGEFLIX</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-md-4">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Shows</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Animes</a>
                            </li>
                            
                        </ul>
                        
                        <form className="me-md-4">
                            <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="profile me-md-4 mt-2 mt-sm-0">Profile</div>
                        
                    </div>
                </div>
            </nav>

           
   
        </div>
    )
}

export default Navbar
