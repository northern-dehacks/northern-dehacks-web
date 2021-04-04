import { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class BoardMemberCard extends Component {
    render() {
        return (
            <Card className='h-100'>
                <CardMedia
                    component="img"
                    alt='img'
                    image={this.props.img}
                    title="Image"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.blurb}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default BoardMemberCard