import React, { PureComponent } from 'react'
import * as tf from '@tensorflow/tfjs';
import { Container, CircularProgress } from '@material-ui/core';
import ImageForm from '../../components/ImageForm';
import ClassificationCard from '../../components/ClassificationCard';
import { MODEL_PATH } from '../../constants/tensorflow';
import { mapPredictions } from '../../helpers/prediction';

let model;

export class Discover extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            lastResult: '',
        };
    }

    async componentDidMount() {
        console.log('Loading tensorflow model..');

        try {
            model = await tf.loadLayersModel(`${process.env.PUBLIC_URL}/${MODEL_PATH}`);
            this.setState({
                loading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({
                error: true,
            });
        }
    }
    
    classifyImage = async (imageID, image) => {
        const imgEl = document.getElementById(imageID);

        if (imgEl) {
            var imageTensor = tf.browser.fromPixels(imgEl)
                .resizeNearestNeighbor([96,96])
                .toFloat()
                .div(tf.scalar(255.0))
                .expandDims();
            
            const result = await model.predict(imageTensor).data();
            const predictions = Array.from(result);
            console.log(predictions);
            this.setState({
                lastResult: mapPredictions(predictions),
            });
        }
    }

    buildLoadingContent = () => {
        return (
            <CircularProgress/>
        );
    }

    buildFormContent = () => {
        return (
            <ImageForm handleSubmit={this.classifyImage}/>
        );
    }

    render() {
        const { loading, lastResult } = this.state;
        
        return (

            <Container>
                {
                    loading
                        ? this.buildLoadingContent()
                        : this.buildFormContent()
                }
                {
                    lastResult && lastResult.map((x) => <ClassificationCard classification={x}/>)
                }
            </Container>
        )
    }
}

export default Discover;