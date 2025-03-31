import React from "react";
import { useQuery } from "@tanstack/react-query"; 
import { BASE_API } from "../constants/BASE_API";
import CanvaItem

from "./CanvaItem";
const Home = () => {


    
  const {
    data: listOfCanvas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["canvas"],
    queryFn: async () => {
      const response = await fetch(`${BASE_API}/canvas/all`);
      if (!response.ok) {
        throw new Error("Failed to fetch canvas data");
      }
      return response.json();
    },
  });



  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="container-option"></div>
      <div className="container-canvas">


        {listOfCanvas.map((item) => (
          <CanvaItem key={item.id} item={item} />
        ))}

      </div>


    
    </div>
  );
};

export default Home;
