import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component{
    InstaService = new InstaService();

    state = {             //состояние компонента
        posts: [],
        error: false
    }

    
    componentDidMount(){           //хук жизненного цыкла , рождение элемента
        this.updatePosts();
    }
    
    updatePosts(){           //создаем посты
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {  //меняем состояние  .then
        this.setState({
            posts: posts,
            error: false
        })
        console.log(this.state.posts);
    }

    onError = (err) => {   //обработка ошибки .catch
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item; //деструктаризация

            return(
                <div key = {id} className = 'post'>
                    <User
                        src = {photo} 
                        alt = {altname}
                        name = {name}
                        min/>
                    <img src = {src} alt = {alt} ></img>
                    <div className = {name}>
                        Some account
                    </div>
                    <div className = 'post__descr'>
                        {descr}            
                    </div>
                </div>
            )
        });
    }


    render(){
        const {error, posts} = this.state;

        if(error){
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return(
            <div className = 'left'>
              {items}
            </div> 
        )
    }
}