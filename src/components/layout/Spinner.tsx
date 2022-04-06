import React from "react";
import spinner from "../layout/assets/spinner.gif";

const Spinner: React.FC = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={spinner}
        alt="spinner"
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
