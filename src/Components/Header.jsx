import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Avatar, Box, Typography } from '@mui/material';
import btcicon from '../assets/img/btccoin.png'

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
                <Typography variant="h5" style={{ fontSize: "25px", fontWeight: "bold" }}>Dashboard</Typography>
            </div>
            <div className="right">
                <div className="notification">

                </div>
                <div className="message">

                </div>
                <Box className="avatar" sx={{ position: "relative" }}>
                    <Box className="avatar-area" sx={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}>
                        <Avatar alt="Remy Sharp" src={btcicon} />
                        <Typography>Arbab</Typography >
                    </Box>
                </Box>
            </div>
        </header >
    )
}

export default Header