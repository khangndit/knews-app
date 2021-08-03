const { default: axios } = require('axios');

const axiosApi = axios.create({
  baseURL: 'https://knews-server.herokuapp.com/crawlerData',
  headers: {
    'content-type': 'application/json',
  },
});

axiosApi.interceptors.request.use(async (configs) => {
  return configs;
});

axiosApi.interceptors.response.use(
  (response) => {
    if (response.data.error) {
      alert('Đã xãy ra lỗi hệ thống, vui lòng thử lại!');
      return null;
    }
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosApi;
