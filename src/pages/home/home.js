import { Component } from 'react';
import { Box, Container } from '@material-ui/core';

import './home.scss';

import Landing from './components/landing.js';
import MissionStatement from './components/mission.js';
import AboutTheBoard from './components/about-the-board.js';
import NDHValues from './components/ndh-values.js';

class Home extends Component {
    render() {
        return (
            <Box>
                <Landing />

                <Container className='smaller-container'>
                    <Box mt={10} />
                    <NDHValues />
                    <Box mt={40} />
                    <MissionStatement />
                    <Box mt={40} />
                    <AboutTheBoard />
                    <Box mt={40} />
                </Container>


            </Box >
        )
    }
}

export default Home