import { Component } from "react";
import { Box, Container } from "@material-ui/core";

import './home.scss';

import Landing from "./components/landing.js";
import MissionStatement from "./components/mission.js";
import AboutTheBoard from "./components/about-the-board.js";


class Home extends Component {
    render() {
        return (
            <Box>
                <Landing />

                <Container className='smaller-container'>
                    <MissionStatement />
                    <Box mt={40} />
                    <AboutTheBoard />
                </Container>


            </Box >
        )
    }
}

export default Home