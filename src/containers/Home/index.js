import React, { PureComponent } from 'react'
import { Container, Button } from '@material-ui/core'
import { SocialIcon } from 'react-social-icons';

class Home extends PureComponent {
    
    render() {
        return (
            <Container>
                <h1>Welcome to Floral-ML!</h1>
                <p>Floral-ML is an image recognition website which identifies pictures of flowers. Floral-ML was developed using ReactJS and TensorflowJS.</p>
                <p>Click Discover in the menu to start uploading and identifying floral images!</p>
                <p>You can also check out the Encyclopedia to browse a database of numerous plants and flower. The source of data is from the United States Department of Agriculture and Wikipedia.</p>

                <Button
                    onClick={() => window.open('https://github.com/Ewong3/floral-ml')}
                    startIcon={<SocialIcon network="github"/>}
                >
                    View the source code here.
                </Button>
            </Container>
        );
    }
}

export default Home;