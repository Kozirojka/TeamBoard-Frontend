import React from "react";
import BoardList from "./BoardList";
import CreateOption from "./CreateOption";

// this is the main page of the app,
// it contains the list of boards and the 
// option to create a new board
const Homepage = () => {
  return (
    <div>
      <div className="container-option"></div>

      <CreateOption/>

      {/**<BoardList />**/}

      
    </div>
  );
};

export default Homepage;