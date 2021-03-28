import { Component } from "react"
import { Button, Grid } from '@material-ui/core'

class Newsletter extends Component {
    render() {
        return (
            <form>
                <Grid container justify="center" spacing={5}>
                    <Grid item md={8}>
                        <input
                            name="newsletter-signup"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </Grid>
                    <Grid item md={2}>
                        <Button className='w-100 h-100' variant="contained" color="secondary">Subscribe</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default Newsletter