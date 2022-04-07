import { createContext, ReactNode } from "react";
import { AlertContextTypes } from "../../types";

const AlertContext = createContext<AlertContextTypes | null>(null);

export const AlertContextProvider: React.FC<ReactNode> = ({ children }) => {
  return <AlertContext.Provider value={{}}>{children}</AlertContext.Provider>;
};
