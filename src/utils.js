const {
  REACT_APP_PROFILE,
  REACT_APP_TOKEN,
  REACT_APP_PROFILELIST,
} = process.env;


export const fetchUser = async () => {
    console.log(REACT_APP_PROFILE)
    try {
        const res = await fetch(REACT_APP_PROFILE, {
            headers: {
                Authorization: "Bearer " + REACT_APP_TOKEN,
            },
        });
        const user = await res.json()
        return user
    } catch (err) {
        
console.log('there is an error')
    
    }
}

export const fetchAllUsers = async () => {
  console.log(REACT_APP_PROFILE);
  try {
    const res = await fetch(REACT_APP_PROFILELIST, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    const users = await res.json();
    return users;
  } catch (err) {
    console.log("there is an error");
  }
};