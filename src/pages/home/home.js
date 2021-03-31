import { Component } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './home.scss'

import Clouds from './components/clouds.js';
import Satellite from './components/satellite.js';
import Background from './components/background.js';
import Landing from "./components/landing.js";
import MissionStatement from "./components/mission.js";
import AboutTheBoard from "./components/about-the-board.js";


class Home extends Component {
    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <Landing />
                
                <ParallaxLayer offset={1.2} speed={1.5} className='to-front'>
                    <MissionStatement />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} className='to-front'>
                    <AboutTheBoard />
                </ParallaxLayer>

                <Background />
                <Satellite />
                <Clouds />
            </Parallax >
        )
    }
}

export default Home