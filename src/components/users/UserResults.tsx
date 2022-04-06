import React from "react";
import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import { contextTypes } from "../../types";
import Spinner from "../layout/Spinner";

const UserResults: React.FC = () => {
  const { users, isLoading } = useContext(GithubContext) as contextTypes;

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <h3><Spinner/></h3>;
  }
};

export default UserResults;
