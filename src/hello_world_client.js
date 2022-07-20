const axios = require('axios');

const sendGetRequest = async (path) => {
  const config = {
    timeout: 100,
    headers: { 'User-Agent': 'NewbieToAxiosAndNock' },
  };
  return axios.get(`${process.env.HELLO_WORLD_DOMAIN}${path}`, config)
};

module.exports = { sendGetRequest };
