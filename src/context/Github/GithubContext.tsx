import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";
import { contextTypes, userTypes } from "../../types";

const GithubContext = createContext<contextTypes | null>(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider: React.FC<ReactNode> = ({ children }) => {
  const [isLoading, setisLoading] = useState<Boolean>(false);
  const [users, setUsers] = useState<userTypes[]>([]);
  const [user, setUser] = useState<userTypes>({
    login: "Godsheritage",
    id: 56279264,
    avatar_url: "https://avatars.githubusercontent.com/u/56279264?v=4",
    html_url: "https://github.com/Godsheritage",
  
    type: "User",
    name: "Godsheritage D Adeoye",
    blog: "https://react-portfolio-ruddy.vercel.app/",
    location: "Nigeria",
    hireable: null,
    bio: "Front End Developer || React Developer|| UI/UX Designer ||Tech Enthusiast\r\n",
    twitter_username: "kyng_Herit",
    public_repos: 26,
    public_gists: 1,
    followers: 3,
    following: 5,
  });

  // to search for users
  const searchUsers = async (text: any) => {
    setisLoading(true);
    const params = new URLSearchParams({
      q: text,
    });
    const response: any = await axios.get(
      `${GITHUB_URL}/search/users?${params}`
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    );
    setUsers(response.data.items);
    setisLoading(false);
  };

  // to get a single user
  const getUser = async (login: String) => {
    setisLoading(true);

    const response: any = await axios.get(
      `${GITHUB_URL}/users/${login}`
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    );

    if (response.status === 404) {
      window.location.href = "/notfound";
    } else {
      setUser(response.data);
      // console.log(response.data)
      setisLoading(false);
    }
  };

  // to clear users from state
  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <GithubContext.Provider
      value={{ isLoading, user, users, searchUsers, clearUsers, getUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
