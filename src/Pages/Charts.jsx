import { Grid, Typography } from '@mui/material'
import React from 'react'
import CandleChart from '../Components/charts/CandleChart'
import CustomChart from '../Components/charts/Chart'
import RadarChart from '../Components/charts/RadarChart'
import Draggable from 'react-draggable';

const Charts = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ marginBottom: "20px", marginTop: "10px" }}>
                <Typography variant="h4">Crypto Charts</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <CandleChart />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <CustomChart />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadarChart />
            </Grid>
        </Grid>
    )
}

export default Charts