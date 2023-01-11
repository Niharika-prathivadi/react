import React from 'react'
import '../Components/CSS/Nav.css'
import {FaEnvelope} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
function Nav() {
  return (
    <div>
        <div class="main_nav">


<div class="nav_logo">
  <a href="#home"><img src={require('../Components/Images/logo.webp')}></img></a>
</div>

<span><FaSearch className='icon_target'/></span>
<a href="#Recipe">Recipe</a>
<a href="#Articles">Articles</a>
<a href="#Videos">Videos</a>


<div class="nav_content">
  <a href="#shop">Shop</a>
  <a href="#about">About  </a>
  <span><FaEnvelope className='icon_target'/></span>
</div>

</div>

    </div>
  )
}

export default Nav