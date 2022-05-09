import React from 'react'
import logo from "../assets/frontlogoo.png";

const Header = () => {
  return (
    <div>
         <div className='arriba'>
                <div className='burger'>
                    Hola soy el burger
                </div>
                <div className='logo'>
                    <img src={logo} className="elLogo" alt="el logo" />
                </div>
                <div className='user'>Hola soy el user</div>
            </div>
    </div>
  )
}

export default Header