import React, { createContext, useState } from "react";
export const MainContext = createContext();
const MainContextProvider = (props) => {
  const [username, setusername] = useState("osama");

  //you can use funtion
  return (
    <MainContext.Provider value={{ username, setusername }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
