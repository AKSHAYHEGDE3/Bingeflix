import React from 'react'
import SingleItem from '../Home/SingleItem'
import './Watch.scss'

const Watch = () => {
    const data1 = [
        {id:1,name:'one piece',url:'https://images5.alphacoders.com/606/thumbbig-606284.webp',rating:10},
        {id:2,name:'naruto',url:'https://images2.alphacoders.com/135/thumbbig-135670.webp',rating:9.4},
        {id:3,name:'gintama',url:'https://images4.alphacoders.com/227/thumbbig-227724.webp',rating:9.5},
        {id:4,name:'bleach',url:'https://images5.alphacoders.com/331/thumbbig-331316.webp',rating:9},
        {id:5,name:'dragon ball',url:'https://images5.alphacoders.com/329/thumbbig-329756.webp',rating:9},
        {id:6,name:'FMAB',url:'https://images3.alphacoders.com/862/thumbbig-862688.webp',rating:9.3},
        {id:7,name:'black clover',url:'https://images6.alphacoders.com/871/thumbbig-871206.webp',rating:9.5},
        {id:8,name:'attack on titans',url:'https://images3.alphacoders.com/653/thumbbig-653529.webp',rating:19},
        {id:9,name:'one punch man',url:'https://images2.alphacoders.com/676/thumbbig-676433.webp',rating:9.3},
    ]

    return (
        <div>
                <div className="d-flex flex-row">
                    <div className="genre pt-1">Adventure</div>
                    <div className="dropdown">
                        <button className="btn  dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Genre
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">All</a></li>
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Adventure</a></li>
                            <li><a className="dropdown-item" href="/">Comedy</a></li>
                            <li><a className="dropdown-item" href="/">Romance</a></li>
                        </ul>
                    </div>
                </div>
            
            <div className="watchLists ">
            {
                    data1.map((data)=>{
                     return  <SingleItem data={data}/>
                    })
                }     
            </div>
        </div>
    )
}

export default Watch
