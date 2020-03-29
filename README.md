# Floral-ML

Floral-ML is a web application which holds an encyclopedia of various flowers. Users can submit images of flowers, and Floral-ML will classify the type of flower. Users can also browse through an encyclopedia of flowers.

# Requirements & Dependencies, and Sources

## Requirements
- NodeJS: https://nodejs.org/en/
- A browser such as Chrome or Firefox

## Dependencies
- NodeJS: https://nodejs.org/en/
- ReactJS: https://reactjs.org/
- Material-UI: https://material-ui.com/
- TensorflowJS: https://www.tensorflow.org/js

## Resources
- Plants database: https://plants.sc.egov.usda.gov/java/
- Flower training dataset: https://www.kaggle.com/alxmamaev/flowers-recognition
- Tensorflow training tutorial 1: https://www.tensorflow.org/js/tutorials/transfer/image_classification
- Tensorflow training tutorial 2: https://github.com/SaschaDittmann/tfjs-tuberculosis/tree/master/train

# Development

## Setup
1) Ensure you have the requirements above. Install the dependencies with `npm install`.
2) Add testing images to `./tensorflow/data/testing/`. This should be subfolders of the flowers you want to classify.
3) Add training images to `./tensorflow/data/training/`. This should be subfolders of the flowers you want to classify.
4) Run the training model with `npm run training`.
5) Insert the trained model
6) Run Floral-ML web with `npm run start`.

## Scripts

command | description
--- | ----
`npm run start` | Start Floral-ML web in development locally
`npm run training` | Start Tensorflow training to create a tensor model

