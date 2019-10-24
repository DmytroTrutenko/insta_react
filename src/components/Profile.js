import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    return (
        <div className='container profile'>
            <User
                src= 'https://jooinn.com/images/man-19.jpg'
                alt ='man'
                name='Scott'
            />
              <Palette/>
        </div>
    )
}

export default Profile;