import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const getAllComments = async (postId) => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/comments/${postId}`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewComment = async (comment) => {
  try {
    const res = await authAxios.post(`${REACT_APP_URI_DEV}/api/comments/`, comment);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const editComment = async (id, comment) => {
  try {
    const res = await authAxios.put(
      `${REACT_APP_URI_DEV}/api/comments/${id}`,
      comment
    );
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (id) => {
  try {
    const res = await authAxios.delete(`${REACT_APP_URI_DEV}/api/comments/${id}`);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};
