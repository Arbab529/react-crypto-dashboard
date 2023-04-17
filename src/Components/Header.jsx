import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Typography } from '@mui/material';

const Header = ({ toggle, setToggle }) => {
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header>
            <div className="left">
                <button onClick={handleToggle} className='toggle-btn'>
                    <FaBars />
                </button>
                <Typography variant="h5" style={{ fontSize: "28px", fontWeight: "bold" }}>Dashboard</Typography>
            </div>
            <div className="right">
                <Typography variant="h5" style={{ fontSize: "28px", fontWeight: "bold" }}>Arbab</Typography>
            </div>
        </header>
    )
}

export default Header