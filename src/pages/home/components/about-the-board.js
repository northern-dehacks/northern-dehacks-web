import { Container, Grid } from '@material-ui/core'
import { Component } from 'react'
import { ParallaxLayer } from '@react-spring/parallax';

import Nathan from './board-cards/nathan.js'
import Alicia from './board-cards/alicia.js'
import Nancy from './board-cards/nancy.js'

class AboutTheBoard extends Component {
    render() {
        return (
            <ParallaxLayer offset={2} speed={2} className='to-front'>
                <Container maxWidth='xl'>
                    <Grid container justify='space-around'>
                        <Grid item md={3}>
                            <Nathan />
                        </Grid>
                        <Grid item md={3}>
                            <Alicia />
                        </Grid>
                        <Grid item md={3}>
                            <Nancy />
                        </Grid>
                    </Grid>
                </Container>
            </ParallaxLayer>
        )
    }
}

export default AboutTheBoard