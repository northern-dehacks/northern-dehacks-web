import { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class NDHValueBox extends Component {
    render() {
        return (
            <Card className='h-100' elevation={4}>
                <CardMedia
                    height='70%'
                    component="img"
                    alt='img'
                    image={ this.props.img }
                    title={ this.props.name }
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        { this.props.name }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { this.props.blurb }
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default NDHValueBox