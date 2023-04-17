import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import { Box, Typography } from '@mui/material'
import { ImHome } from 'react-icons/im'
import { GrClose } from 'react-icons/gr'

const Sidebar = ({ children, ...rest }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='dashboard'>
            <div className={toggle ? 'sidebar show' : "sidebar"}>

                <div className="close">
                    <button onClick={() => setToggle(!toggle)}>
                        <GrClose />
                    </button>
                </div>

                <div className="logo">
                    <Typography className="desktop-logo" variant='h4' style={{ fontWeight: "bold" }}>{toggle ? 'A' : "Arbab"}</Typography>
                    <Typography className="mobile-logo" variant='h4' style={{ fontWeight: "bold" }}> Arbab</Typography>
                </div>

                <nav className="nav">
                    <NavLink to='/' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Home</Typography>
                    </NavLink>
                    <NavLink to='/portfolio' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Portfolio</Typography>
                    </NavLink>
                    <NavLink to='/news' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>News</Typography>
                    </NavLink>
                    <NavLink to='/trading' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    {/*  */}
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                    <NavLink to='' className="nav-item">
                        <ImHome />
                        <Typography variant="h6" style={{ fontSize: "17px", fontWeight: "400" }}>Trading</Typography>
                    </NavLink>
                </nav>

            </div>

            <main className={toggle ? 'main main-expanded' : 'main'}>
                <Header title="Header" toggle={toggle} setToggle={setToggle} />
                <Box className="dashboard-content">
                    {children}
                </Box>
            </main>
        </div >
    )
}

export default Sidebar