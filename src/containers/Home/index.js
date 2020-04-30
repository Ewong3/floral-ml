import React, { PureComponent } from 'react'
import { Container, Button, Grid } from '@material-ui/core'

import sources from '../../constants/sources';

class Home extends PureComponent {

    renderIntro = () => {
        return (
            <Grid item xs={8}>
                <h1>Welcome to Floral-ML!</h1>
                <p>Floral-ML is an image recognition website which identifies pictures of flowers. Floral-ML was developed using ReactJS and TensorflowJS.</p>
                <p>Click Discover in the menu to start uploading and identifying floral images!</p>
                <p>You can also check out the Encyclopedia to browse a database of numerous plants and flower. The source of data is from the United States Department of Agriculture and Wikipedia.</p>
            </Grid>
        );
    }

    renderLinkButton = (source) => {
        return (
            <Grid item xs={12}>
                <Button
                    onClick={() => window.open(source.url)}
                    startIcon={source.icon}
                >
                    { source.text }
                </Button>
            </Grid>
        );
    }

    renderLinks = () => {
        return (
            <Grid item xs={4}>
                { sources.map(this.renderLinkButton) }
            </Grid>
        );
    }

    render() {
        return (
            <Container>
                <Grid container spacing={6}>
                    { this.renderIntro() }
                    { this.renderLinks() }
                </Grid>
            </Container>
        );
    }
}

export default Home;