import { Component } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './home.scss'

import Clouds from './components/clouds.js';
import Satellite from './components/satellite.js';
import Background from './components/background.js';
import Landing from "./components/landing.js";
import MissionStatement from "./components/mission.js";
import AboutTheBoard from "./components/about-the-board.js";
import { Box, Container } from "@material-ui/core";


class Home extends Component {
    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <Landing />

                <ParallaxLayer offset={1.2} speed={1.3} className='to-front'>
                    <Container className='smaller-container'>
                        <MissionStatement />
                        <Box mt={40} />
                        <AboutTheBoard />
                    </Container>
                </ParallaxLayer>

                <ParallaxLayer offset={0.8} speed={-0.4}>
                    <Satellite />
                </ParallaxLayer>

                <Background />

                <Clouds />



            </Parallax >
        )
    }
}

export default Home