import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from '../../../../components/cards/board-member-card.js';
import NathanImg from '../../../../assets/board-members/nathan.jpg';

const AliciaCard = ({ forwardedRef, view }) => {
    const BLURB = "Hello! My name is Alicia Unwin and I'm currently a grade 11 student and a founding member of Northern DeHacks. I'm passionate about design and business. I help to run social media and coordinate events here at Northern DeHacks."

    return (
        <div className="viewport-block" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='left' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Alicia Unwin' img={NathanImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const AliciaCardViewport = handleViewport(AliciaCard)

class Alicia extends Component {
    constructor(_) {
        super();
        this.state = {
            showAlicia: false
        }
    }

    showAlicia() {
        if (this.state.showAlicia) {
            return
        }
        this.setState({ showAlicia: true });
    }

    render() {
        return (
            <AliciaCardViewport onEnterViewport={() => this.showAlicia()} view={this.state.showAlicia} />
        )
    }
}

export default Alicia