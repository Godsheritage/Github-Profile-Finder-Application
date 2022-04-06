import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { contextTypes, userTypes } from "../../types";

const GithubContext = createContext<contextTypes | null>(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider: React.FC<ReactNode> = ({ children }) => {
  const [isLoading, setisLoading] = useState<Boolean>(true);
  const [users, setUsers] = useState<userTypes[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    setUsers(response.data);
    setisLoading(false);
  };

 

  return (
    <GithubContext.Provider value={{ isLoading, users, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
