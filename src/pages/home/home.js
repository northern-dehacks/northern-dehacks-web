import { Component } from "react";
import { Parallax } from '@react-spring/parallax';

import './home.scss'

import Clouds from './components/clouds.js';
import Satellite from './components/satellite.js';
import Background from './components/background.js';
import Landing from "./components/landing";


class Home extends Component {
    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <Landing />
                <Background />
                <Satellite />
                <Clouds />
            </Parallax >
        )
    }
}

export default Home