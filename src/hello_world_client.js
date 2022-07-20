const { axios } = require('./axiosWithCache');

const greetings = async (name = 'World') => {
  const config = {
    timeout: 100,
    headers: { 'User-Agent': 'NewbieToAxiosAndNock' },
    params: {
      name,
    }
  };
  return axios.get(`${process.env.HELLO_WORLD_DOMAIN}/greetings`, config)
};

module.exports = { greetings };
