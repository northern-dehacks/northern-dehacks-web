import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core';

import NDHValueBox from './ndh-values-box.js'; 
import StemImg from '../../../../assets/ndh-values/stem.svg';
import constants from '../../../../constants/constants.js';

const StemBubble = ({ forwardedRef, view }) => {
    const BLURB = "We value stem"

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={3000} in={view} direction='down' mountOnEnter unmountOnExit>
                <NDHValueBox name='STEM' img={ StemImg } color={ constants.highlight } blurb={ BLURB } />
            </Slide>
        </div>
    )
}

const StemBubbleViewport = handleViewport(StemBubble)

class Stem extends Component {
    constructor(_) {
        super();
        this.state = {
            showStem: false
        }
    }

    showStem() {
        if (this.state.showStem) {
            return
        }
        this.setState({ showStem: true });
    }

    render() {
        return (
            <StemBubbleViewport onEnterViewport={() => this.showStem()} view={this.state.showStem} />
        )
    }
}


export default Stem