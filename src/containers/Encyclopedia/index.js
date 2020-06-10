import React, { PureComponent } from 'react'
import { isEqual } from 'underscore';
import { getPlants } from '../../helpers/dataFetch';
import PlantCard from '../../components/PlantCard';
import { Grid, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import SearchForm from '../../components/SearchForm';

class Encyclopedia extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            searchParams: {},
            page: 1,
            plants: [],
        };
    }
    
    componentDidMount() {
        const { searchParams, page } = this.state;

        this.loadPlants(searchParams, page);
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchParams: currSearchParams, page: currPage } = this.state;
        const { searchParams: prevSearchParams, page: prevPage } = prevState;

        if (!isEqual(currSearchParams, prevSearchParams) || currPage !== prevPage) {

            this.loadPlants(currSearchParams, currPage);
        }
    }

    onSearchHandle = (type, searchValue) => {
        const searchParams = {};
        if (searchValue) {
            searchParams[type] = searchValue;
        }

        this.setState({
            searchParams: searchParams,
            page: 0,
        });
    }

    onPageHandle = (e, newPage) => {
        this.setState({
            page: newPage,
        });
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
        const { plants, page } = this.state;
        
        return (
            <Container>
                <SearchForm onSearch={this.onSearchHandle}/>
                <Grid container spacing={3}>
                    { plants.map((x) => this.renderGridTile(x)) }
                </Grid>
                <Pagination count={5} page={page} onChange={this.onPageHandle} />
            </Container>
        );
    }
}

export default Encyclopedia;