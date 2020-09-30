import React from 'react';
import comment from './Image/comment.png';
import check from './Image/check.png';
import like from './Image/like.png';
import retweet from './Image/retweet.png';
import share from './Image/share.png';
import tick from './Image/tick.png';

function Post(props) {
    return (
     <div className='twitter-post'>
        <div className='avatar'>
            <img src={props.author.photo} alt='avatar'></img>
        </div>
        <div className='indent-left'> 
            <div className='header'>
                <div className='inf-avatar'>
                    <h4>{props.author.name}</h4>
                    <img src={check} alt='check-information' className='check'></img>
                    <span className='vader'>{`${props.author.nickname} · ${props.date}`}</span>
                    <img src={tick} alt='tick-information' className='tick'></img>
                </div>
                <div className='content-of-post'>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className='post-image'>
                <img src={props.image} alt='post-img'></img>
            </div>
            <div className='footer'>
                <div className='info-footer'>
                    <img src={comment} alt='comment-post' className='comment'></img>
                    <span>482</span>
                </div>
                <div className='info-footer'>
                    <img src={retweet} alt='retweet-post' className='retweet'></img>
                    <span>146</span>
                </div>
                <div className='info-footer'>
                    <img src={like} alt='like-post' className='like'></img>
                    <span>887</span>
                </div>
                <div className='info-footer'>
                    <img src={share} alt='share-post' className='share'></img>
                </div>
            </div>
         </div>
    </div>
    );
}

export default Post;