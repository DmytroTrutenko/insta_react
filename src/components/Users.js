import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className = 'right'>
            <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                    alt = 'man'
                    name ='Scott'
                    min/>
            <div className = 'users__block'>
                 <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                         alt = 'man'
                         name ='Scott'
                         min/>


                 <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                         alt = 'man'
                         name ='Scott'
                         min/>


                 <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                         alt = 'man'
                         name ='Scott'
                         min/>


                 <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                         alt = 'man'
                         name ='Scott'
                         min/>
             </div>        
        </div>
    )
}