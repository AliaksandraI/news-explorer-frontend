import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
function Navigation(){
    return (
       <div>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/saved-news">Сохранённые статьи</NavLink>
       </div>
    );
}
 
export default Navigation;