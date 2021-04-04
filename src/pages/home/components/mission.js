import { Container, Slide, Grid, Box } from '@material-ui/core'
import { Component } from 'react'
import handleViewport from 'react-in-viewport';

const Mission = ({ forwardedRef, view }) => {
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Container maxWidth='xl'>
                <Grid container justify='space-around'>
                    <Grid item md={5}>
                        <Slide timeout={1000} in={view} direction='left' mountOnEnter unmountOnExit>
                            <Box className="mission-box">
                                <Box>
                                    <h1>Our Mission</h1>
                                    <p className='mt-2'>
                                        As a student run organization, we aim to strengthen and diversify the STEM community by encouraging high school students to engage themselves in programming and technology. Through our hackathons and other contributions within the STEM community, we strive to give students the opportunity to create and share their inventive projects and creative ideas within a supportive community of individuals similarly interested in STEM.
			                        </p>
                                </Box>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const MissionViewport = handleViewport(Mission);

class MissionStatement extends Component {
    constructor(_) {
        super();
        this.state = {
            showMission: false
        };
    }


    showMission() {
        if (this.state.showMission) {
            return
        }
        this.setState({ showMission: true });
    }

    render() {
        return (
            <MissionViewport onEnterViewport={() => this.showMission()} view={this.state.showMission} />
        )
    }
}





export default MissionStatement
