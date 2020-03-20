import React, { PureComponent } from 'react'

import { getPlants } from '../../helpers/dataFetch';
import PlantCard from '../../components/PlantCard';
import { Grid } from '@material-ui/core';

class Encyclopedia extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            plants: []
        };
    }
    
    componentDidMount() {
        getPlants().then((plants) => {
            this.setState({
                plants: plants,
            });
        })
    }

    renderGridTile = (plant) => {
        return (
            <Grid item xs={4}>
                <PlantCard plant={plant}/>
            </Grid>
        );
    }

    render() {
        const { plants } = this.state;
        
        return (
            <Grid container spacing={3}>
                { plants.map((x) => this.renderGridTile(x)) }
            </Grid>
        )
    }
}

export default Encyclopedia;