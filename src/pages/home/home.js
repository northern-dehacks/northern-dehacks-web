import { Component } from "react"
import { Box, Container } from '@material-ui/core'

import './home.scss'
import Particles from '../../components/particles/particles.js'
import Newsletter from './components/newsletter.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Particles />
                <Container>
                    <Box className='pos-center text-center'>
                        <h1 className='landing-title'>Northern Dehacks</h1>
                        <p className='text-muted lh-2 mb-5'>
                            Northern DeHacks helps future-oriented Canadian students to
                            strengthen and diversify the STEM community and provide valuable
                            opportunities by mentoring and hosting events related to STEM that
                            motivate, as well as deliver confidence and support.
                        </p>
                        <Newsletter />
                    </Box>
                </Container>
            </div>
        )
    }
}

export default Home