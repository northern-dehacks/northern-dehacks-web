import { Component } from "react"
import { Container } from '@material-ui/core'

import './home.scss'
import Particles from '../../components/particles/particles.js'
import Newsletter from './components/newsletter.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Particles />
                <Container>
                    <div className='center'>
                        <h1 className='landing-title'>Northern Dehacks</h1>
                    </div>
                    <Newsletter />

                </Container>
            </div>
        )
    }
}

export default Home