import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core';

import NDHValueBox from './ndh-values-box.js'; 
import DiversityImg from '../../../../assets/ndh-values/diversity.svg';
import constants from '../../../../constants/constants.js';

const DiversityBubble = ({ forwardedRef, view }) => {
    const BLURB = "We value diversity"

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={1000} in={view} direction='down' mountOnEnter unmountOnExit>
                <NDHValueBox name='Diversity' img={ DiversityImg } color={ constants.info } blurb={ BLURB } />
            </Slide>
        </div>
    )
}

const DiversityBubbleViewport = handleViewport(DiversityBubble)

class Diversity extends Component {
    constructor(_) {
        super();
        this.state = {
            showDiversity: false
        }
    }

    showDiversity() {
        if (this.state.showDiversity) {
            return
        }
        this.setState({ showDiversity: true });
    }

    render() {
        return (
            <DiversityBubbleViewport onEnterViewport={() => this.showDiversity()} view={this.state.showDiversity} />
        )
    }
}


export default Diversity