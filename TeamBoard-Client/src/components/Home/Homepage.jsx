import React from "react";
import BoardList from "./BoardList";
import CreateOption from "./CreateOption";
const Homepage = () => {
  return (
    <div>
      <div className="container-option"></div>

      <CreateOption/>

  
      <BoardList />
    </div>
  );
};

export default Homepage;