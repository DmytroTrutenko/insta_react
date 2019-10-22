import React from 'react';

const User = () =>{
    const {min, src, alt, name} = props; //деструктаризация js
    return(
        <a href ='$' className = {min ? 'user min': 'user'}>
            <img src = {src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}

export default User;