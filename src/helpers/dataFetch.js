import fetch from 'node-fetch';

const getPlants = () => {
    return fetch('https://plantsdb.xyz/search?Division=Magnoliophyta').then((response) => {
        return response.json();
    }).then((jsonRes) => {
        return jsonRes.data || [];
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
}

const getPlantData = (plantName) => {
    const plantNameReplaced = plantName.replace(' ', '_');
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${plantNameReplaced}&limit=1&namespace=0&format=json&origin=*`;
    // https://www.mediawiki.org/wiki/MediaWiki
    return fetch(url).then((response) => {
        return response.json();
    });
}

export {
    getPlants,
    getPlantData,
};