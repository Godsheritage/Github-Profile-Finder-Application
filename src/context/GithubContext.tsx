import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { contextTypes, userTypes } from "../types";

const GithubContext = createContext<contextTypes | null>(null);

export const GithubProvider: React.FC<ReactNode> = ({ children }) => {
  const [isLoading, setisLoading] = useState<Boolean>(true);
  const [users, setUsers] = useState<userTypes[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GITHUB_API}/users`
        // headers: {
        //   Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        // },
      
    );
    setUsers(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GithubContext.Provider value={{ isLoading, users }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
