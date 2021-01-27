
import {
  getAllUsers,
  getCurrentUser,
  getCurrentProfile,
} from "../Lib/fetches/users";

export const retrieveAllUsers = async () => {
  try {
    const users = await getAllUsers();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};
export const retrieveCurrentProfile = async (id) => {
  try {
    const users = await getCurrentProfile(id);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};
