import { Component } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

class ParallaxSatellite extends Component {
    render() {
        return (
            <ParallaxLayer offset={0.8} speed={-0.4} style={{ pointerEvents: 'none' }}>
                <img src={'https://awv3node-homepage.surge.sh/build/assets/satellite4.svg'} style={{ width: '15%', marginLeft: '70%' }} alt='decoration' />
            </ParallaxLayer>
        )
    }
}

export default ParallaxSatellite
