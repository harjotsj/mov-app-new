import React from 'react'
import '../../Components/Header/Header.scss'
import logo from '../../Netflix_logo.png'
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <nav className='header'>
        <Link to="/" ><img src={logo} alt='logo'/></Link>
        <div>
                <Link to="/tvshows" >TV Shows</Link>
                <Link to="/movies" >Movies</Link>
                <Link to="/recent" >Recently Added</Link>
                <Link to="/mylist" >My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header