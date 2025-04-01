import React from "react";
import { BASE_API } from "../../constants/BASE_API";
import { useQuery } from "@tanstack/react-query";
import CanvaItem from "../CanvaItem";
import { useNavigate } from "react-router-dom";


const fetchBoards = async () => {
  const response = await fetch(`${BASE_API}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch canvas data");
  }
  return response.json();
};


// this component is used to display the list of boards
const BoardList = () => {

    const navigate = useNavigate();


  const { data: listOfCanvas, error, isLoading } = useQuery({
    queryKey: ["canvas"],
    queryFn: fetchBoards,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container-canvas">
      {listOfCanvas.map((item) => (
        <CanvaItem key={item.id} item={item} onClick={() => navigate(`/board/${item.id}`)} />
    ))}
    </div>
  );
};

export default BoardList;