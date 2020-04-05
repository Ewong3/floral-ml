import React, { PureComponent } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import * as fs from 'fs';
import { Button, Container, CircularProgress } from '@material-ui/core';
import ImageForm from '../../components/ImageForm';
import ClassificationCard from '../../components/ClassificationCard';

let model;

export class Discover extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            lastClassify: '',
        };
    }

    async componentDidMount() {
        console.log('Loading tensorflow model..');
    
        const MODEL_PATH = 'model/model.json';

        try {
            model = await tf.loadLayersModel(`${process.env}/${MODEL_PATH}`);
            this.setState({
                loading: false,
            });
        } catch (error) {
            this.setState({
                error: true,
            });
        }
    }
    
    classifyImage = async (imageID) => {
        const imgEl = document.getElementById(imageID);

        if (imgEl) {
            
            const result = await model.predict(imgEl);
            console.log(result);
    
            this.setState({
                lastClassify: result,
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
        const { loading, lastClassify } = this.state;
        
        return (

            <Container>
                {
                    loading
                        ? this.buildLoadingContent()
                        : this.buildFormContent()
                }
                {
                    lastClassify && lastClassify.map((x) => <ClassificationCard classification={x}/>)
                }
            </Container>
        )
    }
}

export default Discover;