
import React, { PureComponent } from 'react'
import { TextField, Select, Button, MenuItem, Grid, Container } from '@material-ui/core';
import { searchTypes } from '../../constants/search';

export class SearchForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state= {
            type: searchTypes[0].value,
            searchValue: null,
        }
    }

    handleTypeChange = (event) => {
        console.log(event.target.value);
        this.setState({
            type: event.target.value
        });
    }

    handleTextChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchValue: event.target.value
        });
    }

    submitSearchForm = (event) => {
        event.preventDefault();
        const { onSearch } = this.props;
        const { type, searchValue } = this.state;

        onSearch(type, searchValue);
    }

    renderTypeSelection = () => {
        return (
            <Grid item xs={2}>
                <Select
                    fullWidth
                    id="search-type"
                    value={searchTypes[0].value}
                    onChange={this.handleTypeChange}
                >
                    {
                        searchTypes.map((item) => {
                            return (
                                <MenuItem value={item.value}>{item.name}</MenuItem>
                            );
                        })
                    }
                </Select>
            </Grid>
        );
    }

    renderSearchText = () => {
        return (
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="Search for plants"
                    onChange={this.handleTextChange}
                />
            </Grid>
        );
    }

    renderButton = () => {
        return (
            <Grid item xs={4}>
                <Button type="submit">Search</Button>
            </Grid>
        );
    }

    render() {
        return (
            <form onSubmit={this.submitSearchForm}>
                <Grid container spacing={3}>
                    { this.renderTypeSelection() }
                    { this.renderSearchText() }
                    { this.renderButton() }
                </Grid>
            </form>
        )
    }
}

export default SearchForm;