import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const saveUserInfo = (info) => {
    setUserInfo(info);
  };

  const clearUserInfo = () => {
    setUserInfo(null);
  };

  return (
    <UserContext.Provider value={{ userInfo, saveUserInfo, clearUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
