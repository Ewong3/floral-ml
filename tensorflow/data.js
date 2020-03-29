const tf = require('@tensorflow/tfjs-node');
const { Image, createCanvas } = require('canvas');
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

const loadImageFromPath = (filePath) => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.onerror = err => { throw err };
    img.src = filePath;

    return canvas;
}

const loadImages = (prefixPath) => {
    const images = [];
    const labels = [];

    FLOWERS.forEach((flower, index) => {
        const flowerPath = path.join(prefixPath, flower);

        var files = fs.readdirSync(flowerPath);
        
        files.forEach((file) => {
            var filePath = path.join(flowerPath, file);

            const image = loadImageFromPath(filePath);

            var imageTensor = tf.browser.fromPixels(image)
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
        labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 2).toFloat(),
      }
    }
  
    getTestData() {
      return {
        images: tf.concat(this.testData[0]),
        labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 2).toFloat()
      }
    }
  }

module.exports = new FlowerDataset();