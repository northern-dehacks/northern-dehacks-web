import { Component } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './home.scss'

import ParallaxClouds from './components/parallax-clouds.js';
import ParallaxSatellite from './components/parallax-satellite.js';
import ParallaxBackground from './components/parallax-background.js';
import ParallaxLanding from "./components/parallax-landing";


class Home extends Component {
    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                
                <ParallaxLanding />

                <ParallaxLayer offset={1} speed={1} style={{ 'fill': 'white' }}>
                    <div class="custom-shape-divider-top-1617034141">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </ParallaxLayer>

                <ParallaxBackground />
                <ParallaxSatellite />
                <ParallaxClouds />
                
            </Parallax >
        )
    }
}

export default Home