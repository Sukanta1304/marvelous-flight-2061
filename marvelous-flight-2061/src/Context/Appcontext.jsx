import React, { createContext, useState } from "react";

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile:"",
    city:"Kolkata",
    startpoint:""
  });
  return (
    <Appcontext.Provider value={[data, setData]}>
      {children}
    </Appcontext.Provider>
  );
};
export default AppcontextProvider;
