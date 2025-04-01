import * as signalR from "@microsoft/signalr";

let connection = null;

export const startSignalRConnection = async () => {
  if (connection) {
    return connection;
  }

  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5187/drawing-hub", { withCredentials: true })
    .withAutomaticReconnect()
    .build();


  try {
    await connection.start();
    console.log("SignalR connected successfully");
    return connection;
  } catch (error) {
    console.error("SignalR connection error:", error);
    return null;
  }
};

export const getSignalRConnection = () => connection;

