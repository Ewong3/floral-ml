const tf = require('@tensorflow/tfjs-node');

const data = require('./data');
const model = require('./model');

const MODEL_PATHS = ['./tensorflow/model', './public/model'];
const EPOCHS = 50;
const BATCH_SIZE = 5;

async function run(epochs, batchSize, modelSavePaths) {
    data.loadData();
  
    const {images: trainImages, labels: trainLabels} = data.getTrainData();
    console.log("Training Images (Shape): " + trainImages.shape);
    console.log("Training Labels (Shape): " + trainLabels.shape);
    
    model.summary();

    const validationSplit = 0.15;
    
    await model.fit(trainImages, trainLabels, {
        epochs,
        batchSize,
        validationSplit,
    });

    const {images: testImages, labels: testLabels} = data.getTestData();
    const evalOutput = model.evaluate(testImages, testLabels);
  
    console.log(
        `\nEvaluation result:\n` +
        `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; `+
        `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`);
  
    if (modelSavePaths != null) {
        modelSavePaths.forEach( async (path) => {
            await model.save(`file://${path}`);
            console.log(`Saved model to path: ${path}`);
        })
    }
  }
 
  run(EPOCHS, BATCH_SIZE, MODEL_PATHS);