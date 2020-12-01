// EXPERIENCES:

//     - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
//     Get user experiences
//     - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
//     Create an experience. NOTE: every user is allowed to mess only with his own experiences
//     - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience
//     - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience
//     - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience
    
//     ---------------------------------------------------------------------------

//     EXPERIENCE Model:
//     {
//         "_id": "5d925e677360c41e0046d1f5",  //server generated
//         "role": "CTO",
//         "company": "Strive School",
//         "startDate": "2019-06-16",
//         "endDate": "2019-06-16", //could be null
//         "description": "Doing stuff here and there",
//         "area": "Berlin",
//         "username": "admin",  //server generated
//         "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
//         "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
//         "__v": 0  //server generated
//         "image": ... //server generated on upload
//     }   



const {
  REACT_APP_PROFILE,
  REACT_APP_TOKEN,
  REACT_APP_PROFILELIST,
} = process.env;

export const fetchUser = async () => {
  console.log(REACT_APP_PROFILE);
  try {
    const res = await fetch(REACT_APP_PROFILE, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    const user = await res.json();
    if (res.ok) {
      console.log('all good')
      return user;
    } else {
      console.log('there is an error')
    }
  } catch (err) {
    console.log("there is an error with fetching user");
  }
};

export const fetchAllUsers = async () => {
  console.log(REACT_APP_PROFILE);
  try {
    const res = await fetch(REACT_APP_PROFILELIST, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    if (res.ok) {
       const users = await res.json();
       return users;
    } else {
      console.log('there is an error')
    }
   
  } catch (err) {
    console.log("there is an error");
  }
};

export const fetchExperiences = async (id) => {
  try {
    const res = await fetch(REACT_APP_PROFILELIST +`/${id}/experiences`, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    if (res.ok) {
       const experiences = await res.json();
       console.log(experiences)
       return experiences;
    } else {
      console.log('there is an error with fetching experiences')
    }
   
  } catch (err) {
    console.log("there is an error");
  }
};

export const postExperiences = async (id, experience) => {
  console.log(experience)

  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
      method: "POST",
      headers:  new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(experience)
    });
    if (res.ok) {
       return res
    } else {
      console.log('there is an error with posting experiences')
    }
   
  } catch (err) {
    console.log("there is an error", err);
  }
};