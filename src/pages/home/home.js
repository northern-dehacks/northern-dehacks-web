import { Component } from "react"
import { Box, Container } from '@material-ui/core'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './home.scss'
import Particles from '../../components/particles/particles.js'
import Newsletter from './components/newsletter.js'

class Home extends Component {
    render() {
        const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <ParallaxLayer offset={0} speed={1} className='to-front'>
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
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5}>
                    <Particles />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} style={{ 'fill': 'white' }}>
                    <div class="custom-shape-divider-top-1617034141">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} className='page-bg' />
                <ParallaxLayer offset={2} speed={1} className='page-bg' />
                <ParallaxLayer offset={3} speed={1} className='page-bg' />
                <ParallaxLayer offset={4} speed={1} className='page-bg' />

                <ParallaxLayer offset={1} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

                <ParallaxLayer offset={0.8} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='decoration' />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='decoration' />
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} alt='decoration' />
                </ParallaxLayer>

            </Parallax >
        )
    }
}

export default Home