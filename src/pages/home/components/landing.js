import { Component } from 'react'
import { Box, Container } from '@material-ui/core'
import { ParallaxLayer } from '@react-spring/parallax';

import Particles from '../../../components/particles/particles.js';
import Newsletter from './newsletter.js';
import LandingDivider from './landing-divider.js';

class ParallaxLanding extends Component {
    render() {
        return (
            <Box>
                <ParallaxLayer offset={0} speed={1.3} className='to-front'>
                    <Container>
                        <Box className='pos-center text-center'>
                            <h1 className='landing-title'>Northern DeHacks</h1>
                            <p className='text-muted lh-2 mb-5'>
                                Northern DeHacks helps future-oriented Canadian students to
                                strengthen and diversify the STEM community and provides valuable
                                opportunities by mentoring and hosting events related to STEM that
                                motivate, as well as deliver confidence and support.
                        </p>
                            <Newsletter />
                        </Box>
                    </Container>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5}>
                    <Particles />
                </ParallaxLayer>
                <LandingDivider />
            </Box>
        )
    }
}

export default ParallaxLanding