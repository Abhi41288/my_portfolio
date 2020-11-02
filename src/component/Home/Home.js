import React, { useState } from 'react'
import { Grid, Grow, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();

    const [data, setData] = useState([
        {
            imageUrl: "https://alan.app/voice/images/previews/preview.jpg",
            description: "",
            title: "",
            url: ""
        },
        {
            imageUrl: "https://alan.app/voice/images/previews/preview.jpg",
            description: "",
            title: "",
            url: ""
        }, {
            imageUrl: "https://alan.app/voice/images/previews/preview.jpg",
            description: "",
            title: "",
            url: ""
        },
        {
            imageUrl: "https://alan.app/voice/images/previews/preview.jpg",
            description: "",
            title: "",
            url: ""
        }
    ])
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="center" spacing={3}>
                {data.map((project) => (
                    <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card>
                            <CardActionArea href={project.url} target="_blank">
                                <CardMedia className={classes.media} image={project.imageUrl} />
                                <div className={classes.details}>
                                    <Typography variant="body2" color="textSecondary" component="h2">{project.title}</Typography>
                                </div>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">{project.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default Home
