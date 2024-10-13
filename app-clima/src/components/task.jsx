import React from "react";

const Task = ({ msj }) => {
  return (
    <div className="bg-gray-200 border-l-8 border-gray-600 w-[65%] p-4 ml-8 mb-2">
      <p>{msj}</p>
    </div>
  );
};

export default Task;
