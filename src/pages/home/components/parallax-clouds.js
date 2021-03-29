import { Component } from "react";
import { ParallaxLayer } from '@react-spring/parallax';
import { Box } from '@material-ui/core';


class ParallaxClouds extends Component {
    render() {
        const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

        return (
            <Box>
                <ParallaxLayer offset={1} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '50%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.3 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1.7} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.1} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='decoration' />
                </ParallaxLayer>
            </Box>

        )
    }
}

export default ParallaxClouds