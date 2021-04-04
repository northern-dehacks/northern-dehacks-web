import { Grid, Box, Typography } from '@material-ui/core';
import { Component } from 'react';

import Nathan from './board-cards/nathan.js';
import Alicia from './board-cards/alicia.js';
import Nancy from './board-cards/nancy.js';
import Khoi from './board-cards/khoi.js';
import Vishnu from './board-cards/vishnu.js';
import Christian from './board-cards/christian.js';

class AboutTheBoard extends Component {
    render() {
        return (
            <Box>
                <Typography variant='inherit' component='h1' align='center'>Meet The Board</Typography>
                <Grid container justify='space-around' spacing={10}>
                    <Grid item md={4}>
                        <Nathan />
                    </Grid>
                    <Grid item md={4}>
                        <Alicia />
                    </Grid>
                    <Grid item md={4}>
                        <Nancy />
                    </Grid>
                    <Grid item md={4}>
                        <Khoi />
                    </Grid>
                    <Grid item md={4}>
                        <Vishnu />
                    </Grid>
                    <Grid item md={4}>
                        <Christian />
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default AboutTheBoard