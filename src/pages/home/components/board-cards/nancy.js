import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from './board-member-card.js';
import NancyImg from '../../../../assets/board-members/nancy.png';


const NancyCard = ({ forwardedRef, view }) => {
    const BLURB = "Hi! My name is Nancy Zheng and I’m a grade 11 student and a founding member of Northern DeHacks. In my spare time, I'm a passionate entrepreneur and designer. I help coordinate events and run the social media accounts at Northern Dehacks."

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='right' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Nancy Zheng' img={NancyImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const NancyCardViewport = handleViewport(NancyCard)

class Nancy extends Component {
    constructor(_) {
        super();
        this.state = {
            showNancy: false
        }
    }

    showNancy() {
        if (this.state.showNancy) {
            return
        }
        this.setState({ showNancy: true });
    }

    render() {
        return (
            <NancyCardViewport onEnterViewport={() => this.showNancy()} view={this.state.showNancy} />
        )
    }
}


export default Nancy