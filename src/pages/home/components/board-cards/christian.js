import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from './board-member-card.js';
import ChristianImg from '../../../../assets/board-members/christian.png';


const ChristianCard = ({ forwardedRef, view }) => {
    const BLURB = "What's good i'm Christian"

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='right' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Christian Stefaniw' img={ChristianImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const ChristianCardViewport = handleViewport(ChristianCard)

class Christian extends Component {
    constructor(_) {
        super();
        this.state = {
            showChristian: false
        }
    }

    showChristian() {
        if (this.state.showChristian) {
            return
        }
        this.setState({ showChristian: true });
    }

    render() {
        return (
            <ChristianCardViewport onEnterViewport={() => this.showChristian()} view={this.state.showChristian} />
        )
    }
}


export default Christian