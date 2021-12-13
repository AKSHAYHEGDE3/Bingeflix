import React from 'react'
import './Home.scss'
import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Carousels = () => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        const fetchCarousel = async () => {
            try {

                const data = await fetch("http://localhost:5000/getCarousel")
                const list = await data.json()
                setVideos(list)
            } catch (err) {
                console.log(err)
            }
        };
        fetchCarousel();

    }, [])




    return (
        <div >
            <Carousel>
                {
                    videos.map((video,index)=>{
                      
                        <Carousel.Item interval={8000}>
                        <img
                        style={{objectFit:"cover"}}
                            className="d-block w-100"
                            src={video.image}
                            alt={`slide ${index}`}
                        />
                    </Carousel.Item>
                    })
                }
            {/* <Carousel.Item interval={8000}>
                <img
                style={{objectFit:"cover"}}
                    className="d-block w-100"
                    src="https://images4.alphacoders.com/227/thumbbig-227724.webp"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            {/* </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src="https://images4.alphacoders.com/227/thumbbig-227724.webp"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */} 
            
        </Carousel>
        </div>
    )
}

export default Carousels
