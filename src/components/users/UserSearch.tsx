import { useState, useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
import { contextTypes } from "../../types";

const UserSearch = () => {
  const [text, setText] = useState<any>("");
  const { users } = useContext(GithubContext) as contextTypes;

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    text === "" ? window.alert("please enter something") : setText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} action="" className="form-control">
          <div className="relative">
            <input
              value={text}
              onChange={handleChange}
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="search"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              go
            </button>
          </div>
        </form>
      </div>
      {users.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
