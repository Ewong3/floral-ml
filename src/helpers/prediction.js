import { FLOWERS } from "../constants/tensorflow";

const buildPredictionObj = (prediction, index) => {
    return {
        flowerId: index,
        flowerName: FLOWERS[index],
        prediction: prediction,
    }
}

const sortPredictionsDesc = (a, b) => {
    return b.prediction - a.prediction;
}

const mapPredictions = (predictions) => {
    if (predictions) {
        return predictions.map(buildPredictionObj)
            .sort(sortPredictionsDesc);
    }

    return [];
}

export {
    mapPredictions,
};