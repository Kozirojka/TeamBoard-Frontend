import React, { useEffect, useState, createContext, useContext } from 'react';
import { startSignalRConnection, getSignalRConnection } from './SignalRService';


const SignalRContext = createContext(null);


export const SignalRProvider = ({ children }) => {
    const [connection, setConnection] = useState(null);

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        startSignalRConnection().then((conn) => {

            if(conn){
                setConnection(conn);
                setIsConnected(true);
            }
        })

        return () => {
            return () => {
                const conn = getSignalRConnection();
                if (conn) conn.stop();
            };
        };
    })

    return (
        <SignalRContext.Provider value={{ connection, isConnected }}>
            {children}
        </SignalRContext.Provider>
    );

}


export const useSignalR = () => {
    const context = useContext(SignalRContext);
    if (!context) {
        throw new Error("useSignalR must be used within a SignalRProvider");
    }
    return context;
};