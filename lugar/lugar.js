const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '9d1aca29c0mshd47141574b058b1p1f084fjsnec9ac025339e' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.long;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

/*
.then(resp => {
    console.log(resp.data.Results[0]);
})
.catch(err => {
    console.log('ERROR!!!', err);
});*/