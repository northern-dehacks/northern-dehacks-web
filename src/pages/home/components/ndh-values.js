import { Component } from 'react';
import { Grid, Box, Typography } from '@material-ui/core'

import Diversity from './ndh-values/diversity.js';
import Community from './ndh-values/community.js';
import Stem from './ndh-values/stem.js';

class NDHValues extends Component {
    render() {
        return (
            <Box>
                <Typography variant='inherit' component='h1' align='center'>Our Core Values</Typography>
                <Grid container justify='space-around' spacing={10}>
                    <Grid item md={4}>
                        <Diversity />
                    </Grid>
                    <Grid item md={4}>
                        <Community />
                    </Grid>
                    <Grid item md={4}>
                        <Stem />
                    </Grid>
                </Grid>
            </Box>

        )
    }
}

export default NDHValues