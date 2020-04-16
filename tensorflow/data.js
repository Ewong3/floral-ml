const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const TRAINING_IMAGES_PATH = './tensorflow/data/training';
const TESTING_IMAGES_PATH = './tensorflow/data/testing';

const DAISY = 'daisy';
const DANDELION = 'dandelion';
const ROSE = 'rose';
const SUNFLOWER = 'sunflower';
const TULIP = 'tulip';

const FLOWERS = [DAISY, DANDELION, ROSE, SUNFLOWER, TULIP];

const loadImages = (prefixPath) => {
    const images = [];
    const labels = [];

    FLOWERS.forEach((flower, index) => {
        const flowerPath = path.join(prefixPath, flower);

        var files = fs.readdirSync(flowerPath);
        
        files.forEach((file) => {
            var filePath = path.join(flowerPath, file);
            var buffer = fs.readFileSync(filePath);

            var imageTensor = tf.node.decodeImage(buffer)
                .resizeNearestNeighbor([96,96])
                .toFloat()
                .div(tf.scalar(255.0))
                .expandDims();

            images.push(imageTensor);
            labels.push(index);
        });
    });
    
    return [images, labels];
}

class FlowerDataset {
    constructor() {
        this.trainData = [];
        this.testData = [];
    }
  
    loadData() {
      this.trainData = loadImages(TRAINING_IMAGES_PATH);
      this.testData = loadImages(TESTING_IMAGES_PATH);
    }
  
    getTrainData() {
      return {
        images: tf.concat(this.trainData[0]),
        labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 5).toFloat(),
      }
    }
  
    getTestData() {
      return {
        images: tf.concat(this.testData[0]),
        labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 5).toFloat()
      }
    }
  }

module.exports = new FlowerDataset();