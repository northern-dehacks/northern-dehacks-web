import { Container, Slide, Grid } from '@material-ui/core'
import { Component } from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import handleViewport from 'react-in-viewport';

import ProudCoderImg from '../../../assets/decorations/proud-coder.svg'

class MissionStatement extends Component {
    constructor(_) {
        super();
        this.state = {
            showMission: false
        }
    }

    showMission() {
        if (this.state.showMission) {
            return
        }
        this.setState({ showMission: !this.state.showMission });
    }

    render() {
        const MissionViewport = handleViewport(Mission);
        return (
            <ParallaxLayer offset={1.2} speed={1.3} className='to-front'>
                <MissionViewport onEnterViewport={() => this.showMission()} view={ this.state.showMission }/>
            </ParallaxLayer>
        )
    }
}

const Mission = ({ forwardedRef, view }) => {
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Container>
                <Grid container justify='space-between'>
                    <Grid item md={4}>
                        <Slide timeout={1000} in={view} direction='right' mountOnEnter unmountOnExit>
                            <img width='100%' src={ProudCoderImg} alt='proud coder' />
                        </Slide>
                    </Grid>
                    <Grid item md={6}>
                        <Slide timeout={1000} in={view} direction='left' mountOnEnter unmountOnExit>
                            <p>As a student run organization, we aim to strengthen and diversify the
                            STEM community by encouraging high school students to engage themselves
                            in programming and technology. Through our hackathons and other contributions
                            within the STEM community, we strive to give students the opportunity to
                            create and share their inventive projects and creative ideas within a supportive
                        community of individuals similarly interested in STEM.</p>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default MissionStatement
