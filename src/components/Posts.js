import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component{
    render(){
        return(
            <div className = 'left'>
                <Post src = 'https://www.tubefilter.com/wp-content/uploads/2018/07/merrell-twins.jpg' alt ='img'/>
            </div>
            
        )
    }

}