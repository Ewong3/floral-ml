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
            totalPlants: 0,
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
        getPlants(searchParams, page).then((searchResults) => {
            const { totalPlants, plants } = searchResults;
            this.setState({
                totalPlants,
                plants,
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
        const { totalPlants, plants, page } = this.state;
        const totalPages = Math.ceil(totalPlants / 9);
        
        
        return (
            <Container>
                <SearchForm onSearch={this.onSearchHandle}/>
                <Grid container spacing={3}>
                    { plants.map((x) => this.renderGridTile(x)) }
                </Grid>
                <Pagination count={totalPages} siblingCount={3} page={page} onChange={this.onPageHandle} />
            </Container>
        );
    }
}

export default Encyclopedia;