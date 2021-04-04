import { Component } from 'react'
import { Box, Container, Typography } from '@material-ui/core'

import Particles from '../../../components/particles/particles.js';
import Newsletter from './newsletter.js';

class Landing extends Component {
    render() {
        return (
            <Box>
                <Container>
                    <Box className='pos-center text-center'>
                        <h1 className='landing-title'>Northern DeHacks</h1>
                        <Typography variant="body1" color="textSecondary" component="p" className='lh-2 mb-5'>
                            Northern DeHacks helps future-oriented Canadian students to
                            strengthen and diversify the STEM community and provides valuable
                            opportunities by mentoring and hosting events related to STEM that
                            motivate, as well as deliver confidence and support.
                        </Typography>
                        <Newsletter />
                    </Box>
                </Container>

                <Particles />

                <Box mb={30} />
            </Box>
        )
    }
}

export default Landing