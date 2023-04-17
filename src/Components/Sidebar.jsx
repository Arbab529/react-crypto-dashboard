import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import { Typography } from '@mui/material'
import { ImHome } from 'react-icons/im'
import { GrClose } from 'react-icons/gr'

const Sidebar = ({ children, ...rest }) => {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    return (
        <div className='dashboard'>
            <div className={hamburgerToggle ? 'sidebar sidebar-collapsed' : 'sidebar'}>

                <div className="close">
                    <button onClick={() => setHamburgerToggle(!hamburgerToggle)}>
                        <GrClose />
                    </button>
                </div>

                <div className="logo">
                    <Typography variant='h4' style={{ fontWeight: "bold" }}>{hamburgerToggle ? 'A' : 'Arbab'}</Typography>
                </div>

                <nav className="nav">
                    <NavLink to='/' className="nav-item">
                        <ImHome />
                        {hamburgerToggle ? '' : <Typography variant="h6">Home</Typography>}
                    </NavLink>
                    <NavLink to='/portfolio' className="nav-item">
                        <ImHome />
                        {hamburgerToggle ? '' : <Typography variant="h6">Portfolio</Typography>}
                    </NavLink>
                    <NavLink to='/news' className="nav-item">
                        <ImHome />
                        {hamburgerToggle ? '' : <Typography variant="h6">News</Typography>}
                    </NavLink>
                    <NavLink to='/trading' className="nav-item">
                        <ImHome />
                        {hamburgerToggle ? '' : <Typography variant="h6">Trading</Typography>}
                    </NavLink>
                </nav>

            </div>

            <main className={hamburgerToggle ? 'main main-expanded' : 'main'}>
                <Header title="Header" toggle={hamburgerToggle} setToggle={setHamburgerToggle} />
                {children}
            </main>
        </div>
    )
}

export default Sidebar