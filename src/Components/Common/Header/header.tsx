/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './header.css';
import fmsLogo from '../../../Assets/Images/Logo/logo.jpeg';

interface HeaderProps {
    // Define any props you might pass to this component here.
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className='header-fixed card'>
            <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignSelf: 'flex-end', marginLeft: "-150px" }}>
                    <img src={fmsLogo} alt="Logo" style={{ width: '13%' }} />
                    <h4 style={{ color: "#3b6796", textTransform: "uppercase", marginLeft: '1rem' }}>Faecal Sludge Management</h4>
                </div>
                <div style={{ display: 'flex', height: '40px', alignSelf: 'center', marginRight: "-150px" }}>
                    <select name="langSelect" style={{ border: '0.5px solid gray', borderRadius: '5px', width: '110px' }}>
                        <option value={"lang"}>Language</option>
                        <option value={"en"}>English</option>
                        <option value={"te"}>Telugu</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default Header;
