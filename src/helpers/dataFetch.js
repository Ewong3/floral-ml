import fetch from 'node-fetch';
import { combineUrl } from './strings';

const getPlants = () => {
    const root = 'https://plantsdb.xyz/search?';
    const params = {
        'Division': 'Magnoliophyta',
        'fields': 'id,Common_Name,Genera_Binomial_Author,Scientific_Name_x',
        'limit':'9',
        'offset':'200',
    };
    
    const url = combineUrl(root, params);

    return fetch(url).then((response) => {
        return response.json();
    }).then((jsonRes) => {
        return jsonRes.data || [];
    }).then((plantData) => {
        return plantData.map((plant) => {
            return {
                Common_Name: plant.Common_Name,
                Scientific_Name: plant.Scientific_Name_x.replace(plant.Genera_Binomial_Author, '').trim(),
            };
        })
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
}

const getPlantData = (plantName) => {
    const root = 'https://en.wikipedia.org/w/api.php?';
    const params = {
        'action':'opensearch',
        'search': plantName.replace(' ', '_'),
        'limit':'1',
        'namespace':'0',
        'format':'json',
        'origin':'*',
    };

    const url = combineUrl(root, params);
    
    return fetch(url).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        return (jsonResponse[3] ? jsonResponse[3][0] : '') || '';
    }).then((url) => {
        if (url === '') {
            throw 'no url';
        }
        return url;
    }).catch((err) => {
        console.log(err);
        return '';
    });
}

export {
    getPlants,
    getPlantData,
};