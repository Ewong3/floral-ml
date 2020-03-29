const tf = require('@tensorflow/tfjs-node');

const data = require('./data');
const model = require('./model');

async function run(epochs, batchSize, modelSavePath) {
    data.loadData();
  
    const {images: trainImages, labels: trainLabels} = data.getTrainData();
    console.log("Training Images (Shape): " + trainImages.shape);
    console.log("Training Labels (Shape): " + trainLabels.shape);
    
    console.log('SUMMARY');
    model.summary();

    const validationSplit = 0.15;
    
    await model.fit(trainImages, trainLabels, {
        epochs,
        batchSize,
        validationSplit,
        callbacks: {
            onTrainBegin: () => console.log('train begin'),
            onTrainEnd: () => console.log('train end'),
            onEpochBegin: () => console.log('epoch begin'),
            onEpochEnd: () => console.log('epoch end'),
            onBatchBegin: () => console.log('batch begin'),
            onBatchEnd: () => console.log('batch end'),
            onYield: () => console.log('yield'),

        },
    });

    console.log('FIT');
  
    const {images: testImages, labels: testLabels} = data.getTestData();
    const evalOutput = model.evaluate(testImages, testLabels);
  
    console.log(
        `\nEvaluation result:\n` +
        `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; `+
        `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`);
  
    if (modelSavePath != null) {
        model.save
        await model.save(`file://${modelSavePath}`);
        console.log(`Saved model to path: ${modelSavePath}`);
    }
  }
  
  run(1, 5, './tensorflow/model');