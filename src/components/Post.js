import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render(){
        return(
            <div className = 'post'>
                <User src ='https://mawaleinfotech.com/images/about-man-img.jpg' 
                    alt = 'man'
                    name ='Scott'
                    min/>
                <img src = {this.props.src} alt = {this.props.alt} ></img>
                <div className ='post__name'>
                    Some account
                </div>
                <div className = 'post__descr'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's 
                    tandard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged.             
                </div>
            </div>
        )
    }
}