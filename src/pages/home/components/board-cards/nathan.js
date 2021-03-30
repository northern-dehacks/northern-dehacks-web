import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from '../../../../components/cards/board-member-card.js';
import NathanImg from '../../../../assets/board-members/nathan.jpg';


const NathanCard = ({ forwardedRef, view }) => {
    const BLURB = 'Hey everyone! My name is Nathan Roorda and I am a grade 12 student and a founding member of Northern DeHacks. I am super interested in robotics and mechatronics and am one of the sponsorship managers and event coordinators at Northern DeHacks.'

    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='right' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Nathan Roorda' img={NathanImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const NathanCardViewport = handleViewport(NathanCard)

class Nathan extends Component {
    constructor(_) {
        super();
        this.state = {
            showNathan: false
        }
    }

    showNathan() {
        if (this.state.showNathan) {
            return
        }
        this.setState({ showNathan: true });
    }

    render() {
        return (
            <NathanCardViewport onEnterViewport={() => this.showNathan()} view={this.state.showNathan} />
        )
    }
}


export default Nathan