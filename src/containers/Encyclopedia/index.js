// https://plantsdb.xyz/search
import React, { PureComponent } from 'react'

import fetch from 'node-fetch';
import { getPlants } from '../../helpers/dataFetch';
import PlantCard from '../PlantCard';

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
        // https://en.wikipedia.org/w/api.php?action=opensearch&search=apple&limit=1&namespace=0&format=json
        // fetch('https://en.wikipedia.org/wiki/action=query&titles=Albert%20Einstein&format=json&prop=images').then((response) => {
        //     console.log(response);
        // })
    }

    render() {
        const { plants } = this.state;
        console.log(plants)
        return (
            <div>
                { plants.map((x) => <PlantCard plantName={x.Common_Name}/>) }
            </div>
        )
    }
}

export default Encyclopedia
