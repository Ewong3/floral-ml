import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const ClassificationCard = ({classification}) => {
    return (
        <Card style={{ margin: '50px' }}>
            <CardContent>
                <p>{ classification.flowerName }</p>
                <p>{ classification.prediction }</p>
            </CardContent>
        </Card>
    );
}

export default ClassificationCard;