const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3f76ad2d161edd2f738da3f7d40230dd&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}