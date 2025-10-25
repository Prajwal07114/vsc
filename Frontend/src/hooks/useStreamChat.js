import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useStreamToken } from "./useStreamToken"

// 1. Ensure the API Key is read correctly from the environment
const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

export const useStreamChat = () => {
    const { user } = useUser();
    // Destructure error separately to ensure it's available
    const { data: tokenData, isLoading, error: tokenError } = useStreamToken(); 

    const [chatClient, setChatClient] = useState(null);
    const [clientError, setClientError] = useState(null); // State for initialization errors

    useEffect(() => {
        // If still loading token, or user info is missing, exit early.
        if (!tokenData?.token || !user?.id) return;
        
        let client;
        let cancelled = false;

        try {
            // 2. CRITICAL FIX: Initialize the client synchronously here. 
            // If the key is invalid, this is where the synchronous error occurs.
            client = StreamChat.getInstance(STREAM_API_KEY);
        } catch (initError) {
            // If initialization fails (e.g., invalid API key), set the error state
            console.error("Stream Client Initialization Failed:", initError);
            if (!cancelled) {
                setClientError(initError);
            }
            return; 
        }

        const connect = async () => {
            try {
                await client.connectUser(
                    {
                        id: user.id,
                        name: user.fullName ?? user.username ?? user.id,
                        image: user.imageUrl ?? undefined,
                    },
                    tokenData.token // Already confirmed to be a string
                );

                if (!cancelled) setChatClient(client);
            } catch (err) {
                // If the connection fails (e.g., token expired/invalid), set the error state
                console.error("Error connecting to Stream:", err);
                if (!cancelled) {
                    setClientError(err);
                }
            }
        };

        connect();

        return () => {
            cancelled = true;
            client?.disconnectUser(); // Use optional chaining just in case
        };
    }, [tokenData?.token, user?.id]);

    // Return the combined error state: either the token fetch error or the client connection error
    return { chatClient, isLoading, error: tokenError || clientError }; 
};