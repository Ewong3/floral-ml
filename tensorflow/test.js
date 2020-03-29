const tf = require('@tensorflow/tfjs-node');

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.save('file://./tensorflow/model');