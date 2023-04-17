import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { FcSimCardChip } from 'react-icons/fc'
import { SiVisa } from 'react-icons/si'
const CreditCard = () => {
    return (
        <Box className="credit-card">
            <Grid container spacing={2} className='card-type' sx={{ marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Grid item sx={{ fontSize: "60px" }}>
                    <FcSimCardChip />
                </Grid>
                <Grid item sx={{ fontSize: "60px" }}>
                    <SiVisa />
                </Grid>
            </Grid>
            <Typography className='card-number' variant="h6" sx={{ fontSize: "30px", fontWeight: "bold", marginBottom: "20px" }}>1234 5678 6543 2345</Typography>
            <Box className="card-user" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography className='card-holder' variant="h6" sx={{ fontSize: "20px", marginBottom: "10px" }}>M Arbab Anjum</Typography>
                <Typography className='card-security' variant="h6" sx={{ fontSize: "20px", marginBottom: "10px" }}>MM/YY - CVV</Typography>
            </Box>
        </Box>
    )
}

export default CreditCard
