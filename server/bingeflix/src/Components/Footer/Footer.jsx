import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'> 
            <h3 style={{width:"270px"}} className='mx-auto'>connect with me :</h3>
            <div className='text-center mt-4'>
                <a href="https://github.com/AKSHAYHEGDE3"><i class="fab fa-github social mx-3"></i></a> 
                <a href="https://www.linkedin.com/in/akshay-hegde-47ba05206/"><i className="fab fa-linkedin social mx-3"></i></a>
	            <a href="https://www.instagram.com/akshayhegde3/"><i className="fab fa-instagram social mx-3"></i></a>
            </div>
        </div>
    )
}

export default Footer
