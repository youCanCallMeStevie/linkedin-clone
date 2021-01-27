import axios from 'axios'

axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    //if there is a mistake and the original request has not been repeted yet
    if (error.response.status === 400 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await axios.post(
        "http://localhost:3001/api/users/renewToken",
        {
          withCredentials: true,
        }
      );
      return axios(originalRequest);

      //   if (res.status === 201) {
      //     console.log(res);
      //     return axios(originalRequest);
    }
  }
);

export default axios
