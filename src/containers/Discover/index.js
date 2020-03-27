import React, { PureComponent } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as tf from '@tensorflow/tfjs-node';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { Button, Container, CircularProgress } from '@material-ui/core';
import ImageForm from '../../components/ImageForm';
import ClassificationCard from '../../components/ClassificationCard';

let net;
const classifier = knnClassifier.create();

export class Discover extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            lastClassify: '',
        };
    }

    async componentDidMount() {
        console.log('Loading mobilenet..');
    
        // Load the model.
        net = await mobilenet.load();
        console.log('Successfully loaded model');

        this.setState({
            loading: false,
        });
    }
    
    classifyImage = async (imageID) => {
        const imgEl = document.getElementById(imageID);

        if (imgEl) {
            const result = await net.classify(imgEl);
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