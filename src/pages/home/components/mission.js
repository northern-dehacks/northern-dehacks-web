import { Container, Slide, Grid, Paper, Box } from '@material-ui/core'
import { Component } from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import handleViewport from 'react-in-viewport';


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
        this.setState({ showMission: true });
    }

    render() {
        const MissionViewport = handleViewport(Mission);
        return (
            <ParallaxLayer offset={1.2} speed={1.5} className='to-front'>
                <MissionViewport onEnterViewport={() => this.showMission()} view={this.state.showMission} />
            </ParallaxLayer>
        )
    }
}

const Mission = ({ forwardedRef, view }) => {
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Container maxWidth='xl'>
                <Grid container justify='space-around'>
    
                    <Grid item md={5}>
                        <Slide timeout={1000} in={view} direction='left' mountOnEnter unmountOnExit>
                            <Paper className='mission-paper' elevation={5}>
                                <Box className='mission-box p-5'>
                                    <h2>Our Mission</h2>
                                    <p className='lh-2 mission-text'>As a student run organization, we aim to strengthen and diversify the
                                    STEM community by encouraging high school students to engage themselves
                                    in programming and technology. Through our hackathons and other contributions
                                    within the STEM community, we strive to give students the opportunity to
                                    create and share their inventive projects and creative ideas within a supportive
                                    community of individuals similarly interested in STEM.</p>
                                </Box>
                            </Paper>

                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default MissionStatement
