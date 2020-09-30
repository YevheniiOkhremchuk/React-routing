import React from 'react';
import Photo from './Photo';
import './Photos.css';
import userImg1 from './Image/userImg1.png';
import userImg2 from './Image/userImg2.png';
import userImg3 from './Image/userImg3.png';

const userImage = [
    {
        img: userImg1,
        name: 'Corey',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: userImg2,
        name: 'Todd',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: userImg3,
        name: 'Taylor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const Photos = () => {
    return (
        <div className='blockImg'>
            {userImage.map((el, i) => (
                <Photo
                    img={el.img}
                    name={el.name}
                    text={el.text}
                    key={i}
                />
            ))}
      </div>
    );
  };
  
  export default Photos;
