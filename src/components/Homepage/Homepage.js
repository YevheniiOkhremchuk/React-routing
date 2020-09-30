import React from 'react';
import './Homepage.css';
import photo from './Image/photo_2016.jpg'

const Homepage =() => {
    return (
        <div className='Homepage'>
            <div>
                <img src={photo} alt='photo_2016' />
            </div>
            <div className='homeText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default Homepage;