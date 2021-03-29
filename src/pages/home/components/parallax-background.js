import { Component } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { Box } from '@material-ui/core'

class ParallaxBackground extends Component {
    render() {
        return (
            <Box>
                <ParallaxLayer offset={1} speed={1} className='page-bg' />
                <ParallaxLayer offset={2} speed={1} className='page-bg' />
                <ParallaxLayer offset={3} speed={1} className='page-bg' />
                <ParallaxLayer offset={4} speed={1} className='page-bg' />
            </Box>
        )
    }
}

export default ParallaxBackground
