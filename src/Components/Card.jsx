import { Box, Typography } from '@mui/material'
import React from 'react'
import { BsGraphUpArrow, BsGraphDownArrow } from 'react-icons/bs'

const Card = ({ children, ...rest }) => {
    const { coinImg, graph } = rest;
    return (
        <Box className='crypto-card'>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <Box className="coin-image" sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <img src={coinImg} alt="" />
                    <Typography variant="h6">{children}</Typography>
                </Box>
                {/* <Box>
                    {graph === "up" ?
                        <BsGraphUpArrow style={{ color: "#03CF23", fontSize: "27px" }} /> :
                        <BsGraphDownArrow style={{ color: "red", fontSize: "27px" }} />}
                </Box> */}
            </Box>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: "15px" }} >$34.850,10</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" }}>
                <Typography variant="p" style={{ color: "#03CF23" }}>+ 0.10%</Typography>
                <Typography variant="p">{'(BTC/USDT)'}</Typography>
            </Box >
        </Box >
    )
}

export default Card