import Particles from 'react-particles-js';
import React from 'react';


function particles(){
    return <div style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'zIndex': '-1' }}>
        <Particles
            params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#133C9A', ' #157A6E', '#FF6F56', '#FFADAD', '#87BCDE']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#b6b2b2'
                        }
                    },
                    opacity: {
                        value: 0.5211089197812949,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 8.017060304327615,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 12.181158184520175,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#c8c8c8',
                        opacity: 0.6,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 0.7,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'bounce',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                },
                retina_detect: true,
            }} />
    </div>
}

export default particles