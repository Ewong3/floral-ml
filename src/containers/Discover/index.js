import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as tf from '@tensorflow/tfjs-node';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import React, { PureComponent } from 'react'
import { Button } from '@material-ui/core';
import ImageForm from '../../components/ImageForm';

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

    // async componentDidMount() {
    //     console.log('Loading mobilenet..');
    
    //     // Load the model.
    //     net = await mobilenet.load();
    //     console.log('Successfully loaded model');

    //     this.setState({
    //         loading: false,
    //     });
    // }
    
    classifyImage = async () => {
        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('img');

        const result = await net.classify(imgEl);
        console.log(result);

        this.setState({
            lastClassify: result,
        });
        // imgEl
        // const activation = net.infer(img, 'conv_preds');

        // classifier.addExample(activation, classId);
    }

    render() {
        const { lastClassify } = this.state;
        
        return (
            <>
                {/* <img id="img" src={`${process.env.PUBLIC_URL}/20733335929_0100f38c4a_n.jpg`} width="227" height="227"/>
                <Button onClick={this.classifyImage}>Press me</Button>
                <p id='text'>{ lastClassify }</p> */}
                <ImageForm handleSubmit={(image) => console.log(image)}/>
            </>
        )
    }
}

export default Discover;