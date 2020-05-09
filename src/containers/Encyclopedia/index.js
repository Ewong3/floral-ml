import React, { PureComponent } from 'react'

import { getPlants } from '../../helpers/dataFetch';
import PlantCard from '../../components/PlantCard';
import { Grid, Container } from '@material-ui/core';
import SearchForm from '../../components/SearchForm';

class Encyclopedia extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            plants: [],
            page: 0,
        };
    }

    onSearchHandle = (type, searchValue) => {
        const searchParams = {};
        searchParams[type] = searchValue;

        this.loadPlants(searchParams, 0);
    }
    
    componentDidMount() {
        this.loadPlants({}, 0);
    }

    loadPlants = (searchParams, page) => {
        getPlants(searchParams, page).then((plants) => {
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
            <Container>
                <SearchForm onSearch={this.onSearchHandle}/>
                <Grid container spacing={3}>
                    { plants.map((x) => this.renderGridTile(x)) }
                </Grid>
            </Container>
        );
    }
}

export default Encyclopedia;