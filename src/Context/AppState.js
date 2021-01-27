import React, { useEffect } from "react";
import useReducerPersisted from "use-reducer-persisted";
import AppContext from "./app-context";
import appReducer from "./app-reducer";
//1. We need to wrap our entire app withing this AppContext component so that all components will be able to access to the app contex state
//2. The way to have access to the appcontext state is using useContext. Look at

const AppState = (props) => {
  //this is our initial state. Since we are persisiting the data,
  //if we have some data in our local storage,
  //it's going to grab the state from there. Otherwise the initial state will be empty
  const initiaState = {
    ...JSON.parse(localStorage.getItem("linkedinState")),
  } || {
    currentUser: "",
  };

  //This is our persistent reducer which is a mutation of regular reducer (this one changes the state and also save the state into localstorage)
  //The main task of the reducer is to receive instructions from our contex api functions (which are in this file) and modify the state based on those instractions
  //The instructions are sent through the word dispacth. Dispatch carries an action type and a payload which is the data we
  //want to add to the state. If you check the reducer, you'll see that it accepts two parameters, one is the state, one is the action (sent from dispatch)
  const [state, dispatch] = useReducerPersisted(
    "linkedinState",
    appReducer,
    initiaState,
    "local"
  );

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
