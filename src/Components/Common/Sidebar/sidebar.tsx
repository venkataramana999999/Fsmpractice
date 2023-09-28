import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import logo from './../../../Assets/Images/Logo/logo.jpeg';
import './sidebar.css'
import { NavLink } from "react-router-dom";
const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <>
            <div style={{ width: '260px' }}>
                <div style={{ padding: '0.35rem 1rem 0.3rem 1.64rem', marginTop: '0px' }}>
                    <div style={{ display: 'flex' }}>
                        <img src={logo} alt=" FSM logo" width={35} height={35} className="logo" />
                        <h1 className="text-image" style={{ marginTop: '24px' }}>FSM</h1>
                    </div>
                </div>
                <ul className="sidebar-menu" >
                    <li>
                        <NavLink
                            className="menu-button" to='/state-dashboard' >
                            <FontAwesomeIcon icon={faDesktop} className="icon" />
                            State Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="menu-button" to="/ulb-management" >
                            <FontAwesomeIcon icon={faHouse} className="icon" />
                            ULB Management
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="menu-button" to="/user-management" >
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            User Management
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}
export default Sidebar;
