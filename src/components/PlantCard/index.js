import React, { PureComponent } from 'react'
import { getPlantData } from '../../helpers/dataFetch';
import { Card, CardContent, CardActionArea } from '@material-ui/core';

class PlantCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
        };
    }

    componentDidMount() {
        const { plant } = this.props;

        getPlantData(plant.Scientific_Name).then((wikiWebsite) => {
            this.setState({
                url: wikiWebsite,
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
        const { plant } = this.props;
        const { url } = this.state;

        return (
            <Card style={{height: '100%'}}>
                <CardActionArea style={{height: 'inherit'}} onClick={this.cardClicked}>
                    <CardContent>
                        <p> { plant.Common_Name } </p>
                        <p> { plant.Scientific_Name } </p>
                        <p> { url } </p>
                        <p> Click for more details! </p>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default PlantCard
