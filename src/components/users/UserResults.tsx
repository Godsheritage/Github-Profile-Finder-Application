import React from "react";
import { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import { contextTypes } from "../../types";
import GithubContext from "../../context/Github/GithubContext";

const UserResults: React.FC = () => {
  const { users, isLoading } = useContext(GithubContext) as contextTypes;

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
};

export default UserResults;
