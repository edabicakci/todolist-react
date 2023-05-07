import { createContext, useState } from "react";

const RefreshContext = createContext(null);

export const RefreshProvider = ({ children }) => {
  
  const [refresh, setRefresh] = useState(0);


  const values = { refresh, setRefresh };

  return <RefreshContext.Provider value={values}>{children}</RefreshContext.Provider>;
};

export default RefreshContext;
