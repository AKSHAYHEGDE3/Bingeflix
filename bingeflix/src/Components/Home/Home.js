import React from 'react'
import Carousel from './Carousel'
import Lists from './Lists'
import {Link, link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Carousel />
            <Lists />
            <Link to="/itempg"><button>click</button></Link>
        </div>
    )
}

export default Home
