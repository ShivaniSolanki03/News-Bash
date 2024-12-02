// import React, { useState } from "react";
// import axios from "axios";
// import "./Chatbot.css";

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");

//     const handleSend = async () => {
//         if (!input.trim()) return;
//         const userMessage = { sender: "user", text: input };
//         setMessages([...messages, userMessage]);

//         try {
//             const response = await axios.post(
//                 "https://api.openai.com/v1/completions",
//                 {
//                     model: "text-davinci-003",
//                     prompt: input,
//                     max_tokens: 100,
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//                     },
//                 }
//             );
//             const botMessage = { sender: "bot", text: response.data.choices[0].text };
//             setMessages((prevMessages) => [...prevMessages, botMessage]);
//         } catch (error) {
//             const errorMessage = { sender: "bot", text: "Sorry, I couldn't process that request." };
//             setMessages((prevMessages) => [...prevMessages, errorMessage]);
//         }

//         setInput("");
//     };

//     return (
//         <div className="chatbot-container">
//             <div className="messages">
//                 {messages.map((msg, index) => (
//                     <div key={index} className={`message ${msg.sender}`}>
//                         {msg.text}
//                     </div>
//                 ))}
//             </div>
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your message..."
//                 />
//                 <button onClick={handleSend}>Send</button>
//             </div>
//         </div>
//     );
// };

// export default Chatbot;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [input, setInput] = useState(""); // State to handle user input

    // Welcoming message when the component mounts
    useEffect(() => {
        const welcomeMessage = {
            sender: "bot",
            text: "Hello! How can I assist you today?",
        };
        setMessages([welcomeMessage]);
    }, []);

    // Function to handle sending the message to OpenAI API
    const handleSend = async () => {
        if (!input.trim()) return; // Don't send empty messages

        const userMessage = { sender: "user", text: input }; // User message
        setMessages([...messages, userMessage]); // Add user message to chat

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions", // Endpoint for GPT-3 or GPT-4
                {
                    model: "gpt-3.5-turbo", // Use GPT-3.5 or GPT-4, depending on your access
                    messages: [
                        { role: "system", content: "You are a helpful assistant." }, // System message for the model
                        { role: "user", content: input }, // User's message to the model
                    ],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // API key from .env file
                    },
                }
            );

            // Bot response from API
            const botMessage = {
                sender: "bot",
                text: response.data.choices[0].message.content, // Extract the content of the bot's reply
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot's message to chat
        } catch (error) {
            console.error("Error in fetching response:", error); // Log error for debugging

            // More detailed error handling
            if (error.response) {
                console.error("Response error data:", error.response.data);
            } else {
                console.error("Error message:", error.message);
            }

            // Fallback error message
            const errorMessage = { sender: "bot", text: "Sorry, I couldn't process that request." };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }

        setInput(""); // Clear the input field after sending
    };

    return (
        <div className="chatbot-container">
            {/* Displaying chat messages */}
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            
            {/* Input area for the user */}
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // Update input state
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button> {/* Send button */}
            </div>
        </div>
    );
};

export default Chatbot;
