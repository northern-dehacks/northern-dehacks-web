import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from './board-member-card.js';
import VishnuImg from '../../../../assets/board-members/vishnu.png';


const VishnuCard = ({ forwardedRef, view }) => {
    const BLURB = "Hi everyone! I'm Vishnudev Poil and I am a grade 11 student and a founding member of Northern Dehacks. I am passionate about software  and front-end development and am one of the event coordinators here at Northern Dehacks."

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='right' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Vishnudev Poil' img={VishnuImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const VishnuCardViewport = handleViewport(VishnuCard)

class Vishnu extends Component {
    constructor(_) {
        super();
        this.state = {
            showVishnu: false
        }
    }

    showvishnu() {
        if (this.state.showVishnu) {
            return
        }
        this.setState({ showVishnu: true });
    }

    render() {
        return (
            <VishnuCardViewport onEnterViewport={() => this.showvishnu()} view={this.state.showVishnu} />
        )
    }
}


export default Vishnu