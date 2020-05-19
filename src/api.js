const axios = require('axios');
const qs = require('querystring');
const apiUrl = 'https://slack.com/api';

const callAPIMethod = async (method, payload) => {
    let data = Object.assign({ token: process.env.SLACK_ACCESS_TOKEN }, payload);
    let result = await axios.post(`${apiUrl}/${method}`, qs.stringify(data));
    // console.log('---------------data-------------',result.data)
    // console.log('------Username-----',result.data.user.real_name)
    return result.data;
    
}

module.exports = {
    callAPIMethod
}