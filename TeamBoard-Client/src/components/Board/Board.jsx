import React, { useEffect, useState } from "react";
import { useSignalR } from "../../tools/signalRTools/SignalRContext";

const Board = () => {
    const { connection, isConnected } = useSignalR();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!connection) return;

        const handleCursorPosition = (x, y) => {
            setCursorPosition({ x, y });
        };

        connection.on("RecieveCursorPosition", handleCursorPosition);

        return () => {
            connection.off("RecieveCursorPosition", handleCursorPosition);
        };
    }, [connection]);

    const handleMouseMove = (e) => {
        const boardId = "your-board-id"; 
        const x = e.clientX;
        const y = e.clientY;

        if (connection) {
            connection.invoke("SendPositionOfCursor", boardId, x, y); 
        }
    };

    return (
        <div
            style={{ width: "100%", height: "500px", border: "1px solid black" }}
            onMouseMove={handleMouseMove}
        >
            <h2>Відстеження позиції курсора</h2>
            <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>
            <p>
                Позиція курсора: X: {cursorPosition.x}, Y: {cursorPosition.y}
            </p>
        </div>
    );
};

export default Board;
