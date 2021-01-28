import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await authAxios.get(`${REACT_APP_URI_DEV}/api/users/me`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentProfile = async (id) => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users/${id}`);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (credentials) => {
  try {
    const res = await axios.post(`${REACT_APP_URI_DEV}/api/users`, credentials);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};
