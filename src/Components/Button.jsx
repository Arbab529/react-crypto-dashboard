import { Button } from '@mui/material'
import React from 'react'

const Btn = ({ children, ...rest }) => {
    return (
        <>
            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    marginBottom: "10px",
                    padding: "13px",
                    background: "linear-gradient(to right , rgba(255, 0, 177, 0.19),rgba(0, 133, 255, 0.19));",
                    fontSize: "17px",
                    textTransform: "capitalize",
                    transition: "0.5s ease",
                    "&:hover": { backgroundColor: "transparent", background: "linear-gradient(to left , rgba(255, 0, 177, 0.19),rgba(0, 133, 255, 0.19))" }
                }}
            >
                {children}
            </Button>
        </>
    )
}

export default Btn