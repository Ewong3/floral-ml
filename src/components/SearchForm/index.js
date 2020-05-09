
import React, { PureComponent } from 'react'
import { TextField, Select, Button, MenuItem } from '@material-ui/core';
import { searchTypes } from '../../constants/search';

export class SearchForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state= {
            type: null,
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
        const { type } = this.state;

        return (
            <Select
                id="search-type"
                value={type}
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
        );
    }

    renderSearchText = () => {
        return (
            <TextField
                id="standard-basic"
                label="Search for plants"
                onChange={this.handleTextChange}
            />
        );
    }

    render() {
        return (
            <form onSubmit={this.submitSearchForm}>
                { this.renderTypeSelection() }
                { this.renderSearchText() }
                <Button type="submit">Search</Button>
            </form>
        )
    }
}

export default SearchForm;