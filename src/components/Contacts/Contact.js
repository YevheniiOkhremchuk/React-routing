import React from 'react';

const Contact = ({ firstName, lastName, phone, gender }) => {
    return (
        <div className='Contact'>
            <div className='first-name'>
                <div className='name'>{firstName} {lastName}</div>
                <div className='gender'>{gender}</div>
            </div>
            <div className='phone'>{phone}</div>
        </div>
    )
}

export default Contact;