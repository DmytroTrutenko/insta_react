import React, {Component} from 'react';
import logo from '../logo';

export default class Header extends Component{
    render(){
        return (
         <header>
             <div className ='container h-flex'>
                 <a href = '#' className = 'logo'>
                     <img src = {logo} alt = 'logo'></img>
                 </a>
                 <nav className = 'links'>
                     <ul>
                         <li>
                             <a href = '#' className = 'menu__links'>Лента</a>
                         </li>
                         <li>
                             <a href = '#' className = 'menu__links'>Профиль</a>
                         </li>
                     </ul>
                 </nav>

             </div>
         </header>
        )
    }
}