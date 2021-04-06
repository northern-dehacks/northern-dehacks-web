import { Grid } from '@material-ui/core'
import { Component } from 'react'
import handleViewport from 'react-in-viewport';

const Mission = ({ forwardedRef, view }) => {
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Grid container justify='space-around'>
                
            </Grid>
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
