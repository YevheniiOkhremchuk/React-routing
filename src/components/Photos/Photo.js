import React from 'react';

const Photo = ({img, name, text}) =>{
    return(
        <div>
            <div className='blockInfo'>
                <img className='userImg' src={img} alt='userImg'></img>
                <div className='userName'>{name}</div>
                <div className='userText'>{text}</div>
            </div>
        </div>
    );
};
export default Photo;