import React, { createContext, useContext } from "react";
import { teamList } from "../datasource/data";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  return (
    <>
      <GlobalContext.Provider
        value={{
          teamList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobalContext };
