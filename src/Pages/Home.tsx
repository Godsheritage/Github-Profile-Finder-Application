import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home: React.FC = () => {
  return (
    <>
      <UserResults />
      <UserSearch />
    </>
  );
};

export default Home;
