import { Component } from "react"
import { Button, Grid } from '@material-ui/core'

class Newsletter extends Component {
    render() {
        return (
            <form>
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <input
                            name="newsletter-signup"
                            type="email"
                            placeholder="Email Address"
                            className='p-3'
                            required
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Button className='h-100 newsletter-btn' variant="contained" color="primary">Sign up!</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default Newsletter