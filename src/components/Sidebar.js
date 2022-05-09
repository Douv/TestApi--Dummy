import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaStarOfLife,
    FaSignal,
    FaHome
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Header from './Header';


const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem=[
        {
            path:"/",
            name:"Inicio",
            icon:<FaHome/>
        },
        {
            path:"/comunidad",
            name:"Comunidad",
            icon:<FaUserAlt/>
        },
        {
            path:"/certificaciones",
            name:"Certificaciones",
            icon:<FaSignal/>
        },
        {
            path:"/campos",
            name:"Mis campos",
            icon:<FaStarOfLife/>
        }
    ]
    return (

        <div>
           <Header />
            
                <div className="container">
                <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                    <div className="top_section">
                        <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
                </div>
        </div>
    );
};

export default Sidebar;