import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core'

import BoardMemberCard from './board-member-card.js';
import KhoiImg from '../../../../assets/board-members/khoi.png';

const KhoiCard = ({ forwardedRef, view }) => {
    const BLURB = "Hi everyone! I'm Khoi Nguyen and I am a grade 12 student and a founding member of Northern Dehacks. I am passionate about technology and coding and am one of the coordinators here at Northern Dehacks."

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='left' mountOnEnter unmountOnExit>
                <BoardMemberCard name='Khoi Nguyen' img={KhoiImg} blurb={BLURB} />
            </Slide>
        </div>
    )
}

const KhoiCardViewport = handleViewport(KhoiCard)

class Khoi extends Component {
    constructor(_) {
        super();
        this.state = {
            showKhoi: false
        }
    }

    showAlicia() {
        if (this.state.showKhoi) {
            return
        }
        this.setState({ showKhoi: true });
    }

    render() {
        return (
            <KhoiCardViewport onEnterViewport={() => this.showAlicia()} view={this.state.showKhoi} />
        )
    }
}

export default Khoi