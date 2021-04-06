import { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { Slide } from '@material-ui/core';

import NDHValueBox from './ndh-values-box.js'; 
import CommunityImg from '../../../../assets/ndh-values/community.svg';
import constants from '../../../../constants/constants.js';

const CommunityBubble = ({ forwardedRef, view }) => {
    const BLURB = "We value community"

    return (
        <div className="viewport-block h-100" ref={forwardedRef}>
            <Slide timeout={2000} in={view} direction='down' mountOnEnter unmountOnExit>
                <NDHValueBox name='Community' img={ CommunityImg } color={ constants.secondary } blurb={ BLURB } />
            </Slide>
        </div>
    )
}

const CommunityBubbleViewport = handleViewport(CommunityBubble)

class Community extends Component {
    constructor(_) {
        super();
        this.state = {
            showCommunity: false
        }
    }

    showCommunity() {
        if (this.state.showCommunity) {
            return
        }
        this.setState({ showCommunity: true });
    }

    render() {
        return (
            <CommunityBubbleViewport onEnterViewport={() => this.showCommunity()} view={this.state.showCommunity} />
        )
    }
}


export default Community