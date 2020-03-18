import React, { PureComponent } from 'react'
import { getPlantData } from '../../helpers/dataFetch';
import { Button } from '@material-ui/core';

class PlantCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
        };
    }

    componentDidMount() {
        const { plantName } = this.props;

        getPlantData(plantName).then((plantData) => {
            console.log(plantData[3]);
            const website = plantData[3] ? plantData[3][0] : '';
            this.setState({
                url: website,
            })
        });
    }

    cardClicked = () => {
        const { url } = this.state;
        if (url) {
            window.open(url);
        }
    }

    render() {
        const { plantName } = this.props;

        return (
            <Button onClick={this.cardClicked}>
                { plantName }
            </Button>
        );
    }
}

export default PlantCard
