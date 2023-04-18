import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '../Components/Card'
import Organization from '../assets/img/organization.png'
import btccoin from '../assets/img/btccoin.png'
import ethcoin from '../assets/img/ethcoin.png'
import Btn from '../Components/Button'
import CreditCard from '../Components/CreditCard'
import { BiShow, BiHide } from 'react-icons/bi'
import CustomChart from '../Components/charts/Chart'
import CandleChart from '../Components/charts/CandleChart'

const Home = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={8} xl={9}>
                    <CreditCard />
                </Grid>
                <Grid item xs={12} sm={12} md={4} xl={3} className='home-exchange-btn'>
                    <Btn>Buy/Sell</Btn>
                    <Btn>+ Add Crypto</Btn>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="crypto-card-hover">
                <Grid item xs={12} md={8} xl={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card coinImg={btccoin} graph="down" >Bitcoin</Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card coinImg={ethcoin} graph="up">Ethereum</Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card coinImg={btccoin} graph="down">Litecoin</Card>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ marginBottom: "20px", marginTop: "30px", textAlign: "center" }}>
                                <Typography variant="h5">Crypto Today</Typography>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <CandleChart />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <CustomChart />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} xl={3}>
                    <div className='news-image'>
                        <img src={btccoin} alt="News Image" />
                    </div>
                </Grid>
            </Grid>

        </div >
    )
}

export default Home