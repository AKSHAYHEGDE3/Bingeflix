import React from 'react'
import './Home.scss'
import SingleItem from './SingleItem';


const Lists = () => {
   
    return (
        <div>
            <div className="bar p-2 ">
                <span className="trending mx-2">Trending</span>
                <button type="button" class="btn ms-4 mb-1"><i className="fa fa-play-circle me-2"></i>Movies</button>
            </div>
            <div class="listContainer p-4">
                {/* {
                    data.map((data)=>{
                     return  <SingleItem data={data}/>
                    })
                }            */}
            </div>
        </div>
    )
}

export default Lists
