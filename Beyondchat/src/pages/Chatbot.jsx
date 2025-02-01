import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { FiMic } from "react-icons/fi";
import EmojiPicker from "emoji-picker-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './Chatbot.css';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newMessage = { sender: "user", text: userMessage };
      setChatHistory([...chatHistory, newMessage]);
      setUserMessage("");
      setTimeout(() => {
        const botResponse = { sender: "bot", text: "Thank you for this opportunity. I have completed my assignment, and I wanted to mention that the chatbot is not connected to an API at the moment, so it currently gives the same response. I hope you will consider my application for the next steps." };
        setChatHistory((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleChange = (e) => setUserMessage(e.target.value);

  const handleEmojiClick = (emojiObject) => {
    setUserMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleMicClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  React.useEffect(() => {
    if (transcript) {
      setUserMessage(transcript);
    }
  }, [transcript]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chat-header">
          <FaRobot size={30} color="#007bff" />
          <h2>Chatbot</h2>
        </div>
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={message.sender === "user" ? "user-message" : "bot-message"}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            value={userMessage}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="input-field"
          />
          <div className="icon-container">
            <BsEmojiSmile
              size={24}
              color="#007bff"
              className="icon"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div className="emoji-picker">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <FiMic size={24} color="#007bff" className="icon" onClick={handleMicClick} />
            <AiOutlineSend size={24} color="#007bff" onClick={handleSendMessage} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
