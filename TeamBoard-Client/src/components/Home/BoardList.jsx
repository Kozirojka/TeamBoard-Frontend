import React from "react";
import { BASE_API } from "../../constants/BASE_API";
import { useQuery } from "@tanstack/react-query";
import CanvaItem from "../CanvaItem";


const fetchBoards = async () => {
  const response = await fetch(`${BASE_API}/api/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch canvas data");
  }
  return response.json();
};

const BoardList = () => {

  
  const { data: listOfCanvas, error, isLoading } = useQuery({
    queryKey: ["canvas"],
    queryFn: fetchBoards,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container-canvas">
      {listOfCanvas.map((item) => (
        <CanvaItem key={item.id} item={item}  />
      ))}
    </div>
  );
};

export default BoardList;